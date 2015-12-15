/// <reference path="../core/controller" />
/// <reference path="../view/counter" />
/// <reference path="../view/addCounter" />

namespace YJMCNT {
    /**
     * CounterController
     */
    export class CounterController extends Core.Controller {
        counter:Counter;
        countView: CounterView;
        addCounterView: AddCounterView;
        
        constructor(private $element:JQuery) {
            super();
            this.addCounterView = new AddCounterView();
            this.countView = new CounterView();
            this.countView.addObserver(this);
            this.counter = this.countView.counter;
        }
        
        show() {
            var view = this.countView;
            
            var content = view.render();
            var addContent = this.addCounterView.render();
            addContent.clone().insertBefore(content);

            this.bindManipulate(content);

            this.$element.append(content);
        }
        
        update(){
            var view = this.countView;
            
            this.$element.empty();

            var content = view.render();
            this.bindManipulate(content);

            this.$element.append(content);
        }
        
        bindManipulate(hasButtonsDom:JQuery){
            var upButton = hasButtonsDom.find(".countUp");
            upButton.on("click",(e)=>{
                e.preventDefault();
                this.counter.up(1);
            });

            var downButton = hasButtonsDom.find(".countDown");
            downButton.on("click",(e)=>{
                e.preventDefault();
                this.counter.down(1);
            });
            
            var resetButton = hasButtonsDom.find(".countReset");
            resetButton.on("click", (e)=>{
                e.preventDefault();
                this.counter.reset();
            });
        }
        
    }
}