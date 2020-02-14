class Sequencer {

  static fps = 15;
  static fpsInterval = 1000 / Sequencer.fps;
  static processingLimit = 1000;

  constructor(algorithm, updater, condition) {
    // the algorithm function to process an array
    this._algorithm = algorithm || null;
    // callback function to update view after each algorithm run
    this._update = updater || null;
    // end condition
    this._condition = condition || null;
    return this;
  }

  _requireFunctionError(name) {

  }

  set algorithm(func){
    if (typeof func !== "function") {
      throw new Error(`Sequencer algorithm must be a function.`);
    }

    // test algorithm function before setting
    const testArray = [1,2]
    const out = func(testArray);
    // function must return an array
    if ( typeof out !== "object" || out.constructor.name !== "Array" ) {
      throw new Error('Invalid return type in step function.');
    }
    // function must not mutate array size
    if (out.length !== testArray.length) {
      throw new Error('Step function mutates array size.');
    }
    // set algorithm function
    this._algorithm = func;
    return this;
  }

  set update(func) {
    if (typeof func !== "function") {
      throw new Error(`Sequencer updater must be a function.`);
    }
    this._update = func;
    return this;
  }

  set condition(func) {
    if (typeof func !== "function") {
      throw new Error(`Sequencer condition must be a function.`);
    }
    this._condition = func;
    return this;
  }

  run(arr){
    if (!this._algorithm) {
      throw new Error('Sequencer requires an algorithm function.');
    }
    if (!this._update) {
      throw new Error('Sequencer requires an update function.');
    }
    if (!this._condition) {
      throw new Error('Sequencer requires a condition function.');
    }

    this._startProcess(arr);
  }

  _startProcess(arr){
    // initialize processing variables
    this._workingArray = arr.slice();
    this._processingCount = 0;
    this._lastFrame = Date.now();
    this._startTime = this._lastTime;
    this._process();
  }

  _process(){
    // check if process should end
    if (this._condition({
      array: this._workingArray,
      count: this._processingCount,
      startTime: this._startTime,
    }) || this._processingCount >= Sequencer.processingLimit) {
      return this._endProcess();
    }

    // request next frame
    requestAnimationFrame(this._process.bind(this));

    // calculate elapsed time
    const now = Date.now();
    const elapsed = now - this._lastFrame;

    // draw next frame if enough time has elapsed
    if (elapsed >= Sequencer.fpsInterval) {

      // Get ready for next frame by updating last frame to now, but also adjust
      // for your fps not being a multiple of RAF's interval (16.7ms)
      this._lastFrame = now - ( elapsed % Sequencer.fpsInterval );

      // update
      this._workingArray = this._algorithm(this._workingArray);
      this._processingCount++;
      this._update(this._workingArray);
    }
  }

  _endProcess(){
    console.log(`Algorithm complete with ${this._processingCount} iterations`);
    // cleanup
  }

}

export default Sequencer
