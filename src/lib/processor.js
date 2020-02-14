class Processor {

  static fps = 15;
  static fpsInterval = 1000 / Processor.fps;
  static processLimit = 1000;

  constructor({algorithm, update, condition, initialState}) {
    // the algorithm function to process an array
    this._algorithm = algorithm || null;
    // callback function to update view after each algorithm run
    this._update = update || null;
    // end condition
    this._condition = condition || null;
    // initial state
    this._initialState = initialState || {};
    return this;
  }

  set initialState(state) {
    this._initialState = state;
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


    // initialize processing state
    const now = Date.now();
    this._state = {
      ...this._initialState,
      data,
      meta: {
        iterations: 0,
        startTime: now,
        lastFrame: now,
        initialState: {...this._initialState},
      },
    };
    this._process();
  }

  _process(){
    // check if process should end
    if (this._condition(this._state) || this._state.meta.iterations >= Processor.processLimit) {
      return this._endProcess();
    }

    // request next frame
    requestAnimationFrame(this._process.bind(this));

    // calculate elapsed time
    const now = Date.now();
    const elapsed = now - this._state.meta.lastFrame;

    // draw next frame if enough time has elapsed
    if (elapsed >= Processor.fpsInterval) {

      // Get ready for next frame by updating last frame to now, but also adjust
      // for your fps not being a multiple of RAF's interval (16.7ms)
      this._state.meta.lastFrame = now - ( elapsed % Processor.fpsInterval );

      // update
      this._state.data = this._algorithm(this._state);
      this._state.meta.iterations++;
      this._update(this._state);
    }
  }

  _endProcess(){
    console.log(`Algorithm complete with ${this._state.meta.iterations} iterations`);
    // cleanup
  }

}

export default Processor
