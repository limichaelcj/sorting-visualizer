class Processor {

  static defaultFrame = 1000 / 30; // 30fps default
  static processLimit = 8000;

  constructor(options = {}) {
    // set fps render interval
    this._framerate = options.framerate ? options.framerate : options.fps ? 1000 / options.fps : Processor.defaultFrame;
    // function to confirm continuation of process
    this._permit = options.permit || null;
    // algorithm function to process data
    this._algorithm = options.algorithm || null;
    // callback function to update view after each algorithm run
    this._update = options.update || null;
    // end condition
    this._condition = options.condition || null;
    // callback on complete
    this._onComplete = options.onComplete || null;
    // initial state
    this._initialState = options.initialState || {};
    // true if process is running
    this._isRunning = false;
    // true if process has run and completes
    this._isComplete = false;
    // should be true if there is a new dataset to process
    this._shouldReset = true;

    // binders
    this.pause = this.pause.bind(this);

    return this;
  }

  // config setters

  set initialState(state) {
    this._initialState = state;
  }

  set fps(fps) {
    if (typeof fps !== "number") {
      throw new Error(`FPS must be a number.`);
    }
    this._framerate = 1000 / fps;
  }

  set framerate(ms) {
    if (typeof ms !== "number") {
      throw new Error(`Frame duration must be a number in milliseconds.`);
    }
    this._framerate = ms;
  }

  // function setters

  set permit(func){
    if (typeof func !== "function") {
      throw new Error(`Processor permitter must be a function.`);
    }
    this._permit = func;
  }

  set algorithm(func){
    if (typeof func !== "function") {
      throw new Error(`Processor algorithm must be a function.`);
    }
    this._algorithm = func;
  }

  set update(func) {
    if (typeof func !== "function") {
      throw new Error(`Processor updater must be a function.`);
    }
    this._update = func;
  }

  set condition(func) {
    if (typeof func !== "function") {
      throw new Error(`Processor condition must be a function.`);
    }
    this._condition = func;
  }

  set onComplete(func) {
    if (typeof func !== "function") {
      throw new Error(`Processor onComplete must be a function.`);
    }
    this._onComplete = func;
  }

  // state getters

  get state(){
    return this._state;
  }

  get isRunning(){
    return this._isRunning;
  }

  get isComplete(){
    return this._isComplete;
  }

  // state control

  setState(newStates) {
    const meta = this._state.meta;
    this._state = {
      ...this._state,
      ...newStates,
      meta,
    }
  }

  pause() {
    if (this._isRunning) {
      this._isRunning = false;
    }
  }

  reset() {
    this._isRunning = false;
    this._isComplete = false;
    this._shouldReset = true;
  }

  abort() {
    this._endProcess();
  }

  // initialize processing of algorithm upon given data

  run(data){
    if (!this._algorithm) {
      throw new Error('Processor requires an algorithm function.');
    }
    if (!this._update) {
      throw new Error('Processor requires an update function.');
    }
    if (!this._condition) {
      throw new Error('Processor requires a condition function.');
    }

    // initialize processing state if should reset
    if (this._shouldReset) {
      const now = Date.now();
      // set processing state
      this._state = {
        // custom initial state
        ...this._initialState,
        // data provided as argument to run()
        data,
        // immutable state metadata
        meta: {
          counter: 0,
          startTime: now,
          lastFrame: now,
          initialState: {...this._initialState},
          abort: this.abort.bind(this),
        },
      };
      // shouldReset is kept false in case of pause
      this._shouldReset = false;
    }
    // start algorithm process
    if (!this.permit || (!!this._state && this._permit(this._state))){
      this._isComplete = false;
      this._isRunning = true;
      this._process();
    }
  }

  // process each iteration of algorithm

  _process(){
    // check if process should end
    if (this._condition(this._state) || this._state.meta.counter >= Processor.processLimit) {
      return this._endProcess();
    }

    // request next frame if permitted
    if (this._isRunning && (!this._permit || this._permit(this._state))) {
      requestAnimationFrame(this._process.bind(this));
    }

    // calculate elapsed time
    const now = Date.now();
    const elapsed = now - this._state.meta.lastFrame;

    // draw next frame if enough time has elapsed
    if (elapsed >= this._framerate) {

      // Get ready for next frame by updating last frame to now, but also adjust
      // for your fps not being a multiple of RAF's interval (16.7ms)
      this._state.meta.lastFrame = now - ( elapsed % this._framerate );

      // execute process
      this._state.data = this._algorithm(this._state);
      // increment meta iterations for each algorithm run
      this._state.meta.counter++;
      // custom external updater provided by user for instance
      this._update(this._state);
    }
  }

  // end algorithm and clean up

  _endProcess(){
    console.log(`Algorithm complete with ${this._state.meta.counter} operations.`);
    this._isRunning = false;
    this._isComplete = true;
    this._shouldReset = true;
    // custom cleanup
    if(this._onComplete) {
      this._onComplete(this._state);
    }
  }

}

export default Processor
