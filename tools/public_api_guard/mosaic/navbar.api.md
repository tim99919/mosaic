## API Report File for "mosaic"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { ElementRef } from '@angular/core';
import { FocusKeyManager } from '@ptsecurity/cdk/a11y';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i4 from '@angular/common';
import * as i5 from '@angular/cdk/a11y';
import * as i6 from '@angular/cdk/platform';
import * as i7 from '@ptsecurity/mosaic/icon';
import * as i8 from '@ptsecurity/mosaic/tooltip';
import { IFocusableOption } from '@ptsecurity/cdk/a11y';
import { McButton } from '@ptsecurity/mosaic/button';
import { McButtonCssStyler } from '@ptsecurity/mosaic/button';
import { McDropdownTrigger } from '@ptsecurity/mosaic/dropdown';
import { McIcon } from '@ptsecurity/mosaic/icon';
import { McTooltipTrigger } from '@ptsecurity/mosaic/tooltip';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { QueryList } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { TooltipModifier } from '@ptsecurity/mosaic/tooltip';
import { ViewContainerRef } from '@angular/core';

// @public (undocumented)
export class McFocusableComponent implements AfterContentInit, OnDestroy {
    constructor(changeDetectorRef: ChangeDetectorRef);
    // (undocumented)
    blur(): void;
    // (undocumented)
    protected changeDetectorRef: ChangeDetectorRef;
    // (undocumented)
    protected readonly destroyed: Subject<void>;
    // (undocumented)
    protected dropSubscriptions(): void;
    // (undocumented)
    focus(): void;
    // (undocumented)
    focusableItems: QueryList<McNavbarFocusableItem>;
    // (undocumented)
    keyManager: FocusKeyManager<McNavbarFocusableItem>;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    get optionBlurChanges(): Observable<McNavbarFocusableItemEvent>;
    // (undocumented)
    get optionFocusChanges(): Observable<McNavbarFocusableItemEvent>;
    // (undocumented)
    protected resetOptions(): void;
    // (undocumented)
    get tabIndex(): any;
    set tabIndex(value: any);
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McFocusableComponent, never, never, { "tabIndex": "tabIndex"; }, {}, ["focusableItems"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McFocusableComponent, never>;
}

// @public (undocumented)
export class McNavbar extends McFocusableComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    // (undocumented)
    navbarItems: QueryList<McNavbarItem>;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    onKeyDown(event: KeyboardEvent): void;
    // (undocumented)
    rectangleElements: QueryList<McNavbarRectangleElement>;
    // (undocumented)
    readonly resizeStream: Subject<Event>;
    // (undocumented)
    updateExpandedStateForItems: () => void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McNavbar, "mc-navbar", never, {}, {}, ["rectangleElements", "navbarItems"], ["[mc-navbar-container], mc-navbar-container"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbar, never>;
}

// @public (undocumented)
export class McNavbarBento {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarBento, "mc-navbar-item[bento], [mc-navbar-item][bento]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarBento, never>;
}

// @public (undocumented)
export class McNavbarBrand implements AfterContentInit, OnDestroy {
    constructor(navbar: McVerticalNavbar);
    // (undocumented)
    get hasBento(): boolean;
    // (undocumented)
    hovered: boolean;
    // (undocumented)
    logo: McNavbarLogo;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    title: McNavbarTitle;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McNavbarBrand, "mc-navbar-brand, [mc-navbar-brand]", ["mcNavbarBrand"], {}, {}, ["logo", "title"], ["*"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarBrand, [{ optional: true; }]>;
}

// @public (undocumented)
export class McNavbarContainer {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarContainer, "mc-navbar-container", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarContainer, never>;
}

// @public (undocumented)
export type McNavbarContainerPositionType = 'left' | 'right';

// @public (undocumented)
export class McNavbarDivider {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarDivider, "mc-navbar-divider", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarDivider, never>;
}

// @public (undocumented)
export class McNavbarFocusableItem implements IFocusableOption, AfterContentInit, OnDestroy {
    constructor(elementRef: ElementRef<HTMLElement>, changeDetector: ChangeDetectorRef, focusMonitor: FocusMonitor, ngZone: NgZone);
    // (undocumented)
    blur(): void;
    // (undocumented)
    button: McButton;
    // (undocumented)
    get disabled(): any;
    set disabled(value: any);
    // (undocumented)
    focus(origin?: FocusOrigin): FocusOrigin | undefined;
    // (undocumented)
    getLabel(): string;
    // (undocumented)
    get hasFocus(): boolean;
    set hasFocus(value: boolean);
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    readonly onBlur: Subject<McNavbarFocusableItemEvent>;
    // (undocumented)
    readonly onFocus: Subject<McNavbarFocusableItemEvent>;
    // (undocumented)
    onFocusHandler(): void;
    // (undocumented)
    get tabIndex(): number;
    // (undocumented)
    title: McNavbarTitle;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarFocusableItem, "mc-navbar-item, [mc-navbar-item], mc-navbar-brand, [mc-navbar-brand], mc-navbar-toggle", never, { "disabled": "disabled"; }, {}, ["title", "button"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarFocusableItem, never>;
}

// @public (undocumented)
export interface McNavbarFocusableItemEvent {
    // (undocumented)
    item: McNavbarFocusableItem;
}

// @public (undocumented)
export class McNavbarItem extends McTooltipTrigger {
    constructor(rectangleElement: McNavbarRectangleElement, changeDetectorRef: ChangeDetectorRef, overlay: Overlay, elementRef: ElementRef, ngZone: NgZone, scrollDispatcher: ScrollDispatcher, hostView: ViewContainerRef, scrollStrategy: any, direction: Directionality, dropdownTrigger: McDropdownTrigger, bento: McNavbarBento);
    // (undocumented)
    get collapsable(): boolean;
    set collapsable(value: boolean);
    // (undocumented)
    get collapsed(): boolean;
    set collapsed(value: boolean);
    // (undocumented)
    collapsedText: string;
    // (undocumented)
    get croppedText(): string;
    // (undocumented)
    get disabled(): boolean;
    set disabled(value: boolean);
    // (undocumented)
    getTitleWidth(): number;
    // (undocumented)
    get hasCroppedText(): boolean;
    // (undocumented)
    get hasDropDownTrigger(): boolean;
    // (undocumented)
    icon: McIcon;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    onKeyDown($event: KeyboardEvent): void;
    // (undocumented)
    rectangleElement: McNavbarRectangleElement;
    // (undocumented)
    get showHorizontalDropDownAngle(): boolean;
    // (undocumented)
    get showVerticalDropDownAngle(): boolean;
    // (undocumented)
    subTitle: McNavbarSubTitle;
    // (undocumented)
    get subTitleText(): string | null;
    // (undocumented)
    title: McNavbarTitle;
    // (undocumented)
    get titleText(): string | null;
    // (undocumented)
    updateTooltip(): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McNavbarItem, "mc-navbar-item, [mc-navbar-item]", ["mcNavbarItem"], { "collapsedText": "collapsedText"; "collapsed": "collapsed"; "collapsable": "collapsable"; }, {}, ["title", "subTitle", "icon"], ["[mc-icon]", "mc-navbar-title, [mc-navbar-title]", "mc-navbar-subtitle, [mc-navbar-subtitle]", "*"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarItem, [null, null, null, null, null, null, null, null, { optional: true; }, { optional: true; }, { optional: true; }]>;
}

// @public (undocumented)
export class McNavbarLogo {
    // (undocumented)
    readonly hovered: Subject<boolean>;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarLogo, "mc-navbar-logo, [mc-navbar-logo]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarLogo, never>;
}

// @public (undocumented)
export class McNavbarModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McNavbarModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "i2" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "i3" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McNavbarModule, [typeof i1.McNavbar, typeof i1.McNavbarContainer, typeof i2.McNavbarTitle, typeof i2.McNavbarItem, typeof i2.McNavbarBrand, typeof i2.McNavbarLogo, typeof i2.McNavbarToggle, typeof i3.McVerticalNavbar, typeof i2.McNavbarDivider, typeof i2.McNavbarFocusableItem, typeof i2.McNavbarRectangleElement, typeof i2.McNavbarSubTitle, typeof i2.McNavbarBento], [typeof i4.CommonModule, typeof i5.A11yModule, typeof i6.PlatformModule, typeof i7.McIconModule, typeof i8.McToolTipModule], [typeof i1.McNavbar, typeof i1.McNavbarContainer, typeof i2.McNavbarTitle, typeof i2.McNavbarItem, typeof i2.McNavbarBrand, typeof i2.McNavbarLogo, typeof i2.McNavbarToggle, typeof i3.McVerticalNavbar, typeof i2.McNavbarDivider, typeof i2.McNavbarFocusableItem, typeof i2.McNavbarRectangleElement, typeof i2.McNavbarSubTitle, typeof i2.McNavbarBento]>;
}

// @public (undocumented)
export class McNavbarRectangleElement {
    constructor(elementRef: ElementRef);
    // (undocumented)
    button: McButtonCssStyler;
    // (undocumented)
    get collapsed(): boolean;
    set collapsed(value: boolean);
    // (undocumented)
    elementRef: ElementRef;
    // (undocumented)
    getOuterElementWidth(): number;
    // (undocumented)
    get horizontal(): boolean;
    set horizontal(value: boolean);
    // (undocumented)
    readonly state: Subject<void>;
    // (undocumented)
    get vertical(): boolean;
    set vertical(value: boolean);
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarRectangleElement, "mc-navbar-item, [mc-navbar-item], mc-navbar-divider, mc-navbar-brand, [mc-navbar-brand]", never, {}, {}, ["button"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarRectangleElement, never>;
}

// @public (undocumented)
export class McNavbarSubTitle implements AfterContentInit {
    constructor(elementRef: ElementRef);
    // (undocumented)
    getOuterElementWidth(): number;
    // (undocumented)
    readonly hovered: Subject<boolean>;
    // (undocumented)
    get isOverflown(): boolean;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    outerElementWidth: number;
    // (undocumented)
    get text(): string;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarSubTitle, "mc-navbar-subtitle, [mc-navbar-subtitle]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarSubTitle, never>;
}

// @public (undocumented)
export class McNavbarTitle implements AfterViewInit {
    constructor(elementRef: ElementRef);
    // (undocumented)
    checkTextOverflown(): void;
    // (undocumented)
    getOuterElementWidth(): number;
    // (undocumented)
    readonly hovered: Subject<boolean>;
    // (undocumented)
    get isOverflown(): boolean;
    // (undocumented)
    isTextOverflown: boolean;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    outerElementWidth: number;
    // (undocumented)
    get text(): string;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<McNavbarTitle, "mc-navbar-title, [mc-navbar-title]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarTitle, never>;
}

// @public (undocumented)
export class McNavbarToggle extends McTooltipTrigger implements OnDestroy {
    constructor(navbar: McVerticalNavbar, changeDetectorRef: ChangeDetectorRef, overlay: Overlay, elementRef: ElementRef, ngZone: NgZone, scrollDispatcher: ScrollDispatcher, hostView: ViewContainerRef, scrollStrategy: any, direction: Directionality, document: any);
    // (undocumented)
    get content(): string | TemplateRef<any>;
    set content(content: string | TemplateRef<any>);
    // (undocumented)
    customIcon: McIcon;
    // (undocumented)
    get disabled(): boolean;
    // (undocumented)
    protected modifier: TooltipModifier;
    // (undocumented)
    navbar: McVerticalNavbar;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    onKeydown($event: KeyboardEvent): void;
    // (undocumented)
    toggle: () => void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McNavbarToggle, "mc-navbar-toggle", never, { "content": "mcCollapsedTooltip"; }, {}, ["customIcon"], ["[mc-icon]", "mc-navbar-title"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McNavbarToggle, [null, null, null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
}

// @public (undocumented)
export class McVerticalNavbar extends McFocusableComponent implements AfterContentInit {
    constructor(changeDetectorRef: ChangeDetectorRef);
    // (undocumented)
    readonly animationDone: Subject<void>;
    // (undocumented)
    bento: McNavbarBento;
    // (undocumented)
    get expanded(): boolean;
    set expanded(value: boolean);
    // (undocumented)
    items: QueryList<McNavbarItem>;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    onKeyDown(event: KeyboardEvent): void;
    // (undocumented)
    rectangleElements: QueryList<McNavbarRectangleElement>;
    // (undocumented)
    toggle(): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McVerticalNavbar, "mc-vertical-navbar", ["McVerticalNavbar"], { "expanded": "expanded"; }, {}, ["bento", "rectangleElements", "items"], ["[mc-navbar-container], mc-navbar-container", "[mc-navbar-toggle], mc-navbar-toggle"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McVerticalNavbar, never>;
}

// (No @packageDocumentation comment for this package)

```
