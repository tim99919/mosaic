import { Component, ViewEncapsulation } from '@angular/core';
import { PopUpPlacements } from '@ptsecurity/mosaic/core';


/**
 * @title Basic tooltip
 */
@Component({
    selector: 'tooltip-overview-example',
    templateUrl: 'tooltip-overview-example.html',
    styleUrls: ['tooltip-overview-example.css'],
    encapsulation: ViewEncapsulation.None
})
export class TooltipOverviewExample {
    placement: PopUpPlacements = PopUpPlacements.Top;
}
