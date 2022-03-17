## API Report File for "mosaic"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AnimationEvent as AnimationEvent_2 } from '@angular/animations';
import { AnimationTriggerMetadata } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { DateAdapter } from '@ptsecurity/cdk/datetime';
import { Directionality } from '@angular/cdk/bidi';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FocusOrigin } from '@angular/cdk/a11y';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import * as i2 from '@angular/common';
import { InjectionToken } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { OverlayConfig } from '@angular/cdk/overlay/overlay-config';
import { OverlayRef } from '@angular/cdk/overlay';
import { PipeTransform } from '@angular/core';
import { QueryList } from '@angular/core';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { Type } from '@angular/core';
import { Validator } from '@angular/forms';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

// @public (undocumented)
export enum AnimationCurves {
    // (undocumented)
    AccelerationCurve = "cubic-bezier(0.4,0.0,1,1)",
    // (undocumented)
    DecelerationCurve = "cubic-bezier(0.0,0.0,0.2,1)",
    // (undocumented)
    SharpCurve = "cubic-bezier(0.4,0.0,0.6,1)",
    // (undocumented)
    StandardCurve = "cubic-bezier(0.4,0.0,0.2,1)"
}

// @public (undocumented)
export const BOTTOM_LEFT_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const BOTTOM_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const BOTTOM_RIGHT_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export interface CanColor {
    // (undocumented)
    color: ThemePalette;
}

// Warning: (ae-forgotten-export) The symbol "Constructor" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "AbstractConstructor" needs to be exported by the entry point index.d.ts
//
// @public
export type CanColorCtor = Constructor<CanColor> & AbstractConstructor<CanColor>;

// @public (undocumented)
export interface CanDisable {
    // (undocumented)
    disabled: boolean;
}

// @public
export type CanDisableCtor = Constructor<CanDisable> & AbstractConstructor<CanDisable>;

// @public
export interface CanUpdateErrorState {
    // (undocumented)
    errorState: boolean;
    // (undocumented)
    errorStateMatcher: ErrorStateMatcher;
    // (undocumented)
    readonly stateChanges: Subject<void>;
    // (undocumented)
    updateErrorState(): any;
}

// @public
export type CanUpdateErrorStateCtor = Constructor<CanUpdateErrorState>;

// @public
export function countGroupLabelsBeforeOption(optionIndex: number, options: QueryList<McOption>, optionGroups: QueryList<McOptgroup>): number;

// @public (undocumented)
export class DateFormatter<D> {
    constructor(adapter: DateAdapter<D>, locale: string);
    // (undocumented)
    absoluteDate(date: D, params: FormatterAbsoluteTemplate, datetime?: boolean, seconds?: boolean, milliseconds?: boolean): string;
    // (undocumented)
    absoluteLongDate(date: D): string;
    // (undocumented)
    absoluteLongDateTime(date: D, options?: DateTimeOptions): string;
    // (undocumented)
    absoluteShortDate(date: D): string;
    // (undocumented)
    absoluteShortDateTime(date: D, options?: DateTimeOptions): string;
    // (undocumented)
    config: FormatterConfig;
    // (undocumented)
    openedRangeDate(startDate: D | null, endDate: D | null, template: FormatterRangeTemplate): string;
    // (undocumented)
    openedRangeDateTime(startDate: D | null, endDate: D | null, template: FormatterRangeTemplate, seconds?: boolean, milliseconds?: boolean): string;
    // (undocumented)
    rangeDate(startDate: D, endDate: D, template: FormatterRangeTemplate): string;
    // (undocumented)
    rangeDateTime(startDate: D, endDate: D, template: FormatterRangeTemplate, seconds?: boolean, milliseconds?: boolean): string;
    // (undocumented)
    rangeLongDate(startDate: D | null, endDate?: D | null): string;
    // (undocumented)
    rangeLongDateTime(startDate: D | null, endDate?: D, options?: DateTimeOptions): string;
    // (undocumented)
    rangeMiddleDateTime(startDate: D, endDate: D, options?: DateTimeOptions): string;
    // (undocumented)
    rangeShortDate(startDate: D | null, endDate?: D): string;
    // (undocumented)
    rangeShortDateTime(startDate: D | null, endDate?: D | null, options?: DateTimeOptions): string;
    // (undocumented)
    relativeDate(date: D, template: FormatterRelativeTemplate, seconds?: boolean, milliseconds?: boolean): string;
    // (undocumented)
    relativeLongDate(date: D): string;
    // (undocumented)
    relativeLongDateTime(date: D, options?: DateTimeOptions): string;
    // (undocumented)
    relativeShortDate(date: D): string;
    // (undocumented)
    relativeShortDateTime(date: D, options?: DateTimeOptions): string;
    // (undocumented)
    setLocale(locale: string): void;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFormatter<any>, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<DateFormatter<any>>;
}

// @public (undocumented)
export interface DateTimeOptions {
    // (undocumented)
    milliseconds?: boolean;
    // (undocumented)
    seconds?: boolean;
}

// @public (undocumented)
export const DEFAULT_MC_LOCALE_ID = "ru";

// @public
export class ErrorStateMatcher {
    // (undocumented)
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorStateMatcher, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorStateMatcher>;
}

// @public (undocumented)
export const EXTENDED_OVERLAY_POSITIONS: ConnectionPositionPair[];

// @public (undocumented)
export const fadeAnimation: AnimationTriggerMetadata;

// @public
export type FloatLabelType = 'always' | 'never' | 'auto';

// @public
export interface FormatterAbsoluteTemplate {
    // (undocumented)
    DATE: string;
    // (undocumented)
    DATETIME: string;
    // (undocumented)
    variables?: {
        [name: string]: string;
    };
}

// @public (undocumented)
export interface FormatterConfig {
    // (undocumented)
    absoluteTemplates: {
        short: FormatterAbsoluteTemplate;
        long: FormatterAbsoluteTemplate;
    };
    // (undocumented)
    rangeTemplates: {
        closedRange: {
            short: FormatterRangeTemplate;
            middle: FormatterRangeTemplate;
            long: FormatterRangeTemplate;
        };
        openedRange: {
            short: FormatterRangeTemplate;
            long: FormatterRangeTemplate;
        };
    };
    // (undocumented)
    relativeTemplates: {
        short: FormatterRelativeTemplate;
        long: FormatterRelativeTemplate;
    };
}

// @public
export interface FormatterRangeTemplate {
    // (undocumented)
    DATE: string;
    // (undocumented)
    DATETIME: string;
    // (undocumented)
    END_DATE: string;
    // (undocumented)
    END_DATETIME: string;
    // (undocumented)
    START_DATE: string;
    // (undocumented)
    START_DATETIME: string;
    // (undocumented)
    variables?: {
        [name: string]: string;
    };
}

// @public
export interface FormatterRelativeTemplate {
    // (undocumented)
    AFTER_TOMORROW: string;
    // (undocumented)
    BEFORE_YESTERDAY: string;
    // (undocumented)
    TODAY: string;
    // (undocumented)
    TOMORROW: string;
    // (undocumented)
    variables?: {
        [name: string]: string;
    };
    // (undocumented)
    YESTERDAY: string;
}

// @public
export function getMcSelectDynamicMultipleError(): Error;

// @public
export function getMcSelectNonArrayValueError(): Error;

// @public
export function getMcSelectNonFunctionValueError(): Error;

// @public
export function getOptionScrollPosition(optionIndex: number, optionHeight: number, currentScrollPosition: number, panelHeight: number): number;

// @public (undocumented)
export interface HasTabIndex {
    // (undocumented)
    tabIndex: number;
}

// @public (undocumented)
export type HasTabIndexCtor = Constructor<HasTabIndex> & AbstractConstructor<HasTabIndex>;

// @public (undocumented)
export function isBoolean(val: any): val is boolean;

// @public
export interface LabelOptions {
    float?: FloatLabelType;
}

// @public (undocumented)
export const LEFT_BOTTOM_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const LEFT_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const LEFT_TOP_POSITION_PRIORITY: ConnectionPositionPair[];

// @public
export const MC_LABEL_GLOBAL_OPTIONS: InjectionToken<LabelOptions>;

// @public (undocumented)
export const MC_LOCALE_ID: InjectionToken<string>;

// @public (undocumented)
export const MC_OPTION_ACTION_PARENT: InjectionToken<McOptionActionParent>;

// @public
export const MC_OPTION_PARENT_COMPONENT: InjectionToken<McOptionParentComponent>;

// @public (undocumented)
export const MC_SANITY_CHECKS: InjectionToken<boolean>;

// @public
export const MC_SELECT_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;

// @public
export const MC_SELECT_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof mcSelectScrollStrategyProviderFactory;
};

// @public (undocumented)
export const MC_VALIDATION: InjectionToken<McValidationOptions>;

// @public
export class McCommonModule {
    constructor(_sanityChecksEnabled: boolean);
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McCommonModule, [{ optional: true; }]>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McCommonModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McCommonModule, never, [typeof i1.BidiModule], [typeof i1.BidiModule]>;
}

// @public (undocumented)
export class McDecimalPipe implements PipeTransform {
    constructor(_locale: string);
    // (undocumented)
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McDecimalPipe, [{ optional: true; }]>;
    // (undocumented)
    static ɵpipe: i0.ɵɵPipeDeclaration<McDecimalPipe, "mcNumber">;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<McDecimalPipe>;
}

// @public (undocumented)
export class McForm implements AfterContentInit {
    // (undocumented)
    elements: QueryList<McFormElement>;
    // (undocumented)
    handleElements(elements: QueryList<McFormElement>): void;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McForm, ".mc-form-vertical, .mc-form-horizontal", ["mcForm"], {}, {}, ["elements"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McForm, never>;
}

// @public (undocumented)
export class McFormattersModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McFormattersModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McFormattersModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McFormattersModule, [typeof i1_2.McDecimalPipe], never, [typeof i1_2.McDecimalPipe]>;
}

// @public (undocumented)
export class McFormElement implements AfterContentInit {
    constructor(element: ElementRef<HTMLElement>);
    // (undocumented)
    elements: QueryList<McFormElement>;
    // (undocumented)
    hasLegend: boolean;
    // (undocumented)
    isFieldSet: boolean;
    // (undocumented)
    isHorizontal: boolean;
    // (undocumented)
    isRow: boolean;
    // (undocumented)
    margin: boolean;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McFormElement, ".mc-form__row, .mc-form__fieldset, .mc-form__legend", ["mcFormElement"], {}, {}, ["elements"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McFormElement, never>;
}

// @public (undocumented)
export class McFormsModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McFormsModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McFormsModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McFormsModule, [typeof i1_6.McForm, typeof i1_6.McFormElement], never, [typeof i1_6.McForm, typeof i1_6.McFormElement]>;
}

// @public (undocumented)
export class McHighlightModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McHighlightModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McHighlightModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McHighlightModule, [typeof i1_3.McHighlightPipe], [typeof i2.CommonModule], [typeof i1_3.McHighlightPipe]>;
}

// @public (undocumented)
export class McHighlightPipe implements PipeTransform {
    // (undocumented)
    transform(value: any, args: any): any;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McHighlightPipe, never>;
    // (undocumented)
    static ɵpipe: i0.ɵɵPipeDeclaration<McHighlightPipe, "mcHighlight">;
}

// @public
export class McLine {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McLine, "[mc-line], [mcLine]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McLine, never>;
}

// @public (undocumented)
export class McLineModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McLineModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McLineModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McLineModule, [typeof McLine], never, [typeof McLine]>;
}

// @public
export class McLineSetter {
    constructor(_lines: QueryList<McLine>, _element: ElementRef);
}

// @public (undocumented)
export class McMeasureScrollbarService {
    constructor(document: any);
    // (undocumented)
    initScrollBarWidth(): void;
    // (undocumented)
    get scrollBarWidth(): number;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McMeasureScrollbarService, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<McMeasureScrollbarService>;
}

// @public
export class McOptgroup extends McOptgroupMixinBase implements CanDisable {
    // (undocumented)
    label: string;
    labelId: string;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McOptgroup, "mc-optgroup", ["mcOptgroup"], { "disabled": "disabled"; "label": "label"; }, {}, never, ["mc-option, mc-list-option, ng-container"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McOptgroup, never>;
}

// @public
export class McOptgroupBase {
}

// @public (undocumented)
export const McOptgroupMixinBase: CanDisableCtor & typeof McOptgroupBase;

// @public
export class McOption implements AfterViewChecked, OnDestroy {
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef, parent: McOptionParentComponent, group: McOptgroup);
    get active(): boolean;
    // (undocumented)
    deselect(): void;
    // (undocumented)
    get disabled(): any;
    set disabled(value: any);
    // (undocumented)
    focus(): void;
    // (undocumented)
    getHeight(): number;
    // (undocumented)
    getHostElement(): HTMLElement;
    getLabel(): string;
    // (undocumented)
    getTabIndex(): string;
    // (undocumented)
    readonly group: McOptgroup;
    handleKeydown(event: KeyboardEvent): void;
    // (undocumented)
    get id(): string;
    get multiple(): boolean | undefined;
    // (undocumented)
    ngAfterViewChecked(): void;
    // (undocumented)
    ngOnDestroy(): void;
    readonly onSelectionChange: EventEmitter<McOptionSelectionChange>;
    // (undocumented)
    select(): void;
    // (undocumented)
    get selected(): boolean;
    selectViaInteraction(): void;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    // (undocumented)
    get showCheckbox(): boolean | undefined;
    set showCheckbox(value: boolean | undefined);
    readonly stateChanges: Subject<void>;
    value: any;
    get viewValue(): string;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McOption, "mc-option", ["mcOption"], { "value": "value"; "showCheckbox": "showCheckbox"; "disabled": "disabled"; }, { "onSelectionChange": "onSelectionChange"; }, never, ["*"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McOption, [null, null, { optional: true; }, { optional: true; }]>;
}

// @public (undocumented)
export class McOptionActionBase {
}

// @public (undocumented)
export class McOptionActionComponent extends McOptionActionMixinBase implements AfterViewInit, OnDestroy {
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, option: McOptionActionParent);
    // (undocumented)
    get active(): boolean;
    // (undocumented)
    customIcon: ElementRef;
    // (undocumented)
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    // (undocumented)
    hasFocus: boolean;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    onBlur(): void;
    // (undocumented)
    onClick($event: any): void;
    // (undocumented)
    onFocus($event: any): void;
    // (undocumented)
    onKeyDown($event: any): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McOptionActionComponent, "mc-option-action", ["mcOptionAction"], { "disabled": "disabled"; }, {}, ["customIcon"], ["[mc-icon]"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McOptionActionComponent, never>;
}

// @public (undocumented)
export const McOptionActionMixinBase: HasTabIndexCtor & CanDisableCtor & typeof McOptionActionBase;

// @public (undocumented)
export interface McOptionActionParent {
    // (undocumented)
    dropdownTrigger: {
        opened: boolean;
        restoreFocus: boolean;
        dropdownClosed: EventEmitter<void>;
        lastDestroyReason: void | 'click' | 'keydown' | 'tab';
        openedBy: Exclude<FocusOrigin, 'program' | null> | undefined;
        toggle(): void;
    };
    // (undocumented)
    focus(): void;
    // (undocumented)
    tooltipTrigger: {
        disabled: boolean;
    };
}

// @public (undocumented)
export class McOptionModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McOptionModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McOptionModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "i2" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "i3" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "i5" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McOptionModule, [typeof i1_5.McOption, typeof i2_2.McOptgroup, typeof i3.McOptionActionComponent], [typeof i2.CommonModule, typeof i5.McPseudoCheckboxModule], [typeof i1_5.McOption, typeof i2_2.McOptgroup, typeof i3.McOptionActionComponent]>;
}

// @public
export interface McOptionParentComponent {
    // (undocumented)
    multiple?: boolean;
}

// @public
export class McOptionSelectionChange {
    constructor(source: McOption, isUserInput?: boolean);
    // (undocumented)
    isUserInput: boolean;
    // (undocumented)
    source: McOption;
}

// @public (undocumented)
export abstract class McPopUp implements OnDestroy {
    protected constructor(changeDetectorRef: ChangeDetectorRef);
    afterHidden(): Observable<void>;
    // (undocumented)
    animationDone({ toState }: AnimationEvent_2): void;
    // (undocumented)
    animationStart(): void;
    // (undocumented)
    classMap: {};
    // (undocumented)
    protected closeOnInteraction: boolean;
    // (undocumented)
    content: string | TemplateRef<any>;
    // (undocumented)
    detectChanges(): void;
    // (undocumented)
    handleBodyInteraction(): void;
    // (undocumented)
    header: string | TemplateRef<any>;
    // (undocumented)
    hide(delay: number): void;
    // (undocumented)
    isTemplateRef(value: any): boolean;
    // (undocumented)
    isVisible(): boolean;
    // (undocumented)
    markForCheck(): void;
    // (undocumented)
    ngOnDestroy(): void;
    protected readonly onHideSubject: Subject<any>;
    // (undocumented)
    protected prefix: string;
    // (undocumented)
    show(delay: number): void;
    // (undocumented)
    updateClassMap(placement: string, customClass: string, classMap?: any): void;
    // (undocumented)
    visibility: PopUpVisibility;
    // (undocumented)
    visibleChange: EventEmitter<boolean>;
    // (undocumented)
    warning: boolean;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McPopUp, never, never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McPopUp, never>;
}

// @public (undocumented)
export abstract class McPopUpTrigger<T> {
    protected constructor(overlay: Overlay, elementRef: ElementRef, ngZone: NgZone, scrollDispatcher: ScrollDispatcher, hostView: ViewContainerRef, scrollStrategy: any, direction?: Directionality | undefined);
    // (undocumented)
    protected readonly availablePositions: {
        [key: string]: ConnectionPositionPair;
    };
    // (undocumented)
    protected clearListeners(): void;
    // (undocumented)
    abstract closingActions(): Observable<any>;
    // (undocumented)
    abstract content: string | TemplateRef<any>;
    // (undocumented)
    protected _content: string | TemplateRef<any>;
    createOverlay(): OverlayRef;
    // (undocumented)
    abstract customClass: string;
    // (undocumented)
    protected _customClass: string;
    // (undocumented)
    protected readonly destroyed: Subject<void>;
    // (undocumented)
    detach: () => void;
    // (undocumented)
    protected direction?: Directionality | undefined;
    // (undocumented)
    abstract disabled: boolean;
    // (undocumented)
    protected _disabled: boolean;
    // (undocumented)
    protected elementRef: ElementRef;
    // (undocumented)
    enterDelay: number;
    // (undocumented)
    abstract getOverlayHandleComponentType(): Type<T>;
    // (undocumented)
    protected getPrioritizedPositions(): ConnectionPositionPair[];
    // (undocumented)
    protected getPriorityPlacementStrategy(value: string | string[]): ConnectionPositionPair[];
    // (undocumented)
    handleKeydown(event: KeyboardEvent): void;
    // (undocumented)
    handleTouchend(): void;
    // (undocumented)
    hide(delay?: number): void;
    // (undocumented)
    protected hostView: ViewContainerRef;
    // (undocumented)
    initListeners(): void;
    // (undocumented)
    protected instance: any | null;
    // (undocumented)
    isOpen: boolean;
    // (undocumented)
    leaveDelay: number;
    // (undocumented)
    protected listeners: Map<string, EventListenerOrEventListenerObject>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    protected ngZone: NgZone;
    // (undocumented)
    onPositionChange: ($event: ConnectedOverlayPositionChange) => void;
    // (undocumented)
    protected abstract originSelector: string;
    // (undocumented)
    protected overlay: Overlay;
    // (undocumented)
    protected abstract overlayConfig: OverlayConfig;
    // (undocumented)
    protected overlayRef: OverlayRef | null;
    // (undocumented)
    protected placement: PopUpPlacements;
    // (undocumented)
    abstract placementChange: EventEmitter<string>;
    // (undocumented)
    protected placementPriority: string | string[] | null;
    // (undocumented)
    protected portal: ComponentPortal<T>;
    // (undocumented)
    protected scrollDispatcher: ScrollDispatcher;
    // (undocumented)
    protected scrollStrategy: any;
    // (undocumented)
    show(delay?: number): void;
    // (undocumented)
    abstract trigger: string;
    // (undocumented)
    abstract updateClassMap(newPlacement?: string): void;
    // (undocumented)
    abstract updateData(): void;
    // (undocumented)
    updatePlacement(value: PopUpPlacements): void;
    // (undocumented)
    updatePlacementPriority(value: any): void;
    updatePosition(reapplyPosition?: boolean): void;
    // (undocumented)
    updateVisible(externalValue: boolean): void;
    // (undocumented)
    protected visible: boolean;
    // (undocumented)
    abstract visibleChange: EventEmitter<boolean>;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McPopUpTrigger<any>, never, never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McPopUpTrigger<any>, never>;
}

// @public
export class McPseudoCheckbox {
    // (undocumented)
    disabled: boolean;
    // (undocumented)
    state: McPseudoCheckboxState;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McPseudoCheckbox, "mc-pseudo-checkbox", never, { "state": "state"; "disabled": "disabled"; }, {}, never, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McPseudoCheckbox, never>;
}

// @public (undocumented)
export class McPseudoCheckboxModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McPseudoCheckboxModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McPseudoCheckboxModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McPseudoCheckboxModule, [typeof i1_4.McPseudoCheckbox], [typeof i2.CommonModule], [typeof i1_4.McPseudoCheckbox]>;
}

// @public (undocumented)
export type McPseudoCheckboxState = 'unchecked' | 'checked' | 'indeterminate';

// @public
export const mcSelectAnimations: {
    readonly transformPanel: AnimationTriggerMetadata;
    readonly fadeInContent: AnimationTriggerMetadata;
};

// @public
export function mcSelectScrollStrategyProviderFactory(overlay: Overlay): () => RepositionScrollStrategy;

// @public (undocumented)
export interface McValidationOptions {
    // (undocumented)
    useValidation: boolean;
}

// Warning: (ae-forgotten-export) The symbol "HasElementRef" needs to be exported by the entry point index.d.ts
//
// @public
export function mixinColor<T extends AbstractConstructor<HasElementRef>>(base: T, defaultColor?: ThemePalette): CanColorCtor & T;

// @public
export function mixinDisabled<T extends AbstractConstructor<{}>>(base: T): CanDisableCtor & T;

// Warning: (ae-forgotten-export) The symbol "HasErrorState" needs to be exported by the entry point index.d.ts
//
// @public
export function mixinErrorState<T extends Constructor<HasErrorState>>(base: T): CanUpdateErrorStateCtor & T;

// @public
export function mixinTabIndex<T extends AbstractConstructor<CanDisable>>(base: T, defaultTabIndex?: number): HasTabIndexCtor & T;

// @public (undocumented)
export enum MultipleMode {
    // (undocumented)
    CHECKBOX = "checkbox",
    // (undocumented)
    KEYBOARD = "keyboard"
}

// @public (undocumented)
export const NUMBER_FORMAT_REGEXP: RegExp;

// @public (undocumented)
export enum PopUpPlacements {
    // (undocumented)
    Bottom = "bottom",
    // (undocumented)
    BottomLeft = "bottomLeft",
    // (undocumented)
    BottomRight = "bottomRight",
    // (undocumented)
    Left = "left",
    // (undocumented)
    LeftBottom = "leftBottom",
    // (undocumented)
    LeftTop = "leftTop",
    // (undocumented)
    Right = "right",
    // (undocumented)
    RightBottom = "rightBottom",
    // (undocumented)
    RightTop = "rightTop",
    // (undocumented)
    Top = "top",
    // (undocumented)
    TopLeft = "topLeft",
    // (undocumented)
    TopRight = "topRight"
}

// @public (undocumented)
export enum PopUpSizes {
    // (undocumented)
    Large = "large",
    // (undocumented)
    Normal = "normal",
    // (undocumented)
    Small = "small"
}

// @public (undocumented)
export enum PopUpTriggers {
    // (undocumented)
    Click = "click",
    // (undocumented)
    Focus = "focus",
    // (undocumented)
    Hover = "hover"
}

// @public (undocumented)
export enum PopUpVisibility {
    // (undocumented)
    Hidden = "hidden",
    // (undocumented)
    Initial = "initial",
    // (undocumented)
    Visible = "visible"
}

// @public (undocumented)
export const POSITION_MAP: {
    [key: string]: ConnectionPositionPair;
};

// @public (undocumented)
export const POSITION_PRIORITY_STRATEGY: {
    top: ConnectionPositionPair[];
    topLeft: ConnectionPositionPair[];
    topRight: ConnectionPositionPair[];
    bottom: ConnectionPositionPair[];
    bottomLeft: ConnectionPositionPair[];
    bottomRight: ConnectionPositionPair[];
    left: ConnectionPositionPair[];
    leftTop: ConnectionPositionPair[];
    leftBottom: ConnectionPositionPair[];
    right: ConnectionPositionPair[];
    rightTop: ConnectionPositionPair[];
    rightBottom: ConnectionPositionPair[];
};

// @public (undocumented)
export const POSITION_TO_CSS_MAP: {
    [key: string]: string;
};

// @public (undocumented)
export const RIGHT_BOTTOM_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const RIGHT_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const RIGHT_TOP_POSITION_PRIORITY: ConnectionPositionPair[];

// @public
export const SELECT_PANEL_INDENT_PADDING_X: number;

// @public
export const SELECT_PANEL_MAX_HEIGHT = 224;

// @public
export const SELECT_PANEL_PADDING_X = 1;

// @public
export const SELECT_PANEL_VIEWPORT_PADDING = 8;

// @public (undocumented)
export const selectEvents = "selectEvents";

// @public
export function setMosaicValidation(component: any): void;

// @public (undocumented)
export function setMosaicValidationForFormControl(component: any, parentForm: NgForm, ngControl: NgControl): void;

// @public (undocumented)
export function setMosaicValidationForModelControl(component: any, validators: Validator[], parentForm: NgForm): void;

// @public
export class ShowOnDirtyErrorStateMatcher implements ErrorStateMatcher {
    // (undocumented)
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowOnDirtyErrorStateMatcher, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<ShowOnDirtyErrorStateMatcher>;
}

// @public (undocumented)
export enum ThemePalette {
    // (undocumented)
    Default = "second",
    // (undocumented)
    Empty = "",
    // (undocumented)
    Error = "error",
    // (undocumented)
    Primary = "primary",
    // (undocumented)
    Second = "second"
}

// @public (undocumented)
export function toBoolean(value: any): boolean;

// @public (undocumented)
export const TOP_LEFT_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const TOP_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const TOP_RIGHT_POSITION_PRIORITY: ConnectionPositionPair[];

// @public (undocumented)
export const validationTooltipHideDelay = 3000;

// @public (undocumented)
export const validationTooltipShowDelay = 10;

// @public (undocumented)
export const VERSION: Version;

// (No @packageDocumentation comment for this package)

```