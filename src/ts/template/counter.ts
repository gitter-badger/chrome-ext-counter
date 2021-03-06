/// <reference path="../core/template" />

namespace YJMCNT {
    /**
     * CounterTemplate
     */
    export class CounterTemplate extends Core.Template{
        constructor() {
            super();
        }

        id: string = "";
        count:number = 0;

        render() {
            var counter = $("<div>");
            counter.addClass("counter");

            var countView = $("<span>");
            countView.addClass("count");
            countView.html("count: " + this.count.toString());

            var countId = $("<input>");
            countId.attr("type", "hidden");
            countId.addClass("id");
            countId.val(this.id);

            var manipulate = $("<div>");
            manipulate.addClass("manipulate");

            var countUpButton = $("<button>");
            countUpButton.html("Up");
            countUpButton.addClass("countUp");
            countUpButton.appendTo(manipulate);

            var countDownButton = $("<button>");
            countDownButton.html("Down");
            countDownButton.addClass("countDown");
            countDownButton.appendTo(manipulate);

            var countResetButton = $("<button>");
            countResetButton.html("Reset");
            countResetButton.addClass("countReset");
            countResetButton.appendTo(manipulate);

            var counterDeleteButton = $("<button>");
            counterDeleteButton.html("Delete");
            counterDeleteButton.addClass("counterDelete");
            counterDeleteButton.appendTo(manipulate);

            counter.append(countView);
            counter.append(countId);
            counter.append(manipulate);
            return counter;

        }
    }
}
