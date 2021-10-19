function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"app\">\r\n    <app-header id=\"header\"></app-header>\r\n    <div id=\"body\" class=\"body-content\" role=\"main\">\r\n        <div class=\"container\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\r\n  <span>Accessibility Testbed</span>\r\n  <button mat-icon-button routerLink=\"table\" id=\"presentationTableNavButton\"\r\n    title=\"Navigate to demo of presentation table match\" aria-label=\"presentation table match\">\r\n    <mat-icon>table</mat-icon>\r\n  </button>\r\n  <button mat-icon-button  routerLink=\"example\" id=\"dataTableNavButton\"\r\n    title=\"Navigate to demo of data table match\" aria-label=\"data table match\">\r\n    <mat-icon>table</mat-icon>\r\n  </button>\r\n  <button mat-icon-button routerLink=\"match\" id=\"matchNavButton\"\r\n    title=\"Navigate to demo of drag and drop match\" aria-label=\"match\">\r\n    <mat-icon>multiple_stop</mat-icon>\r\n  </button>\r\n  <button mat-icon-button routerLink=\"match-alt\" id=\"matchAltNavButton\"\r\n  title=\"Navigate to demo of drag and drop match with a different focus\" aria-label=\"match alternative\">\r\n  <mat-icon>multiple_stop</mat-icon>\r\n</button>\r\n  <button mat-icon-button routerLink=\"hotspot\" id=\"hotspotNavButton\"\r\n    title=\"Navigate to demo of hotspot selection\" aria-label=\"hotspot multiple choice\">\r\n    <mat-icon>map</mat-icon>\r\n  </button>\r\n  <button mat-icon-button routerLink=\"hotspot-single\" id=\"hotspotSingleNavButton\"\r\n    title=\"Navigate to demo of hotspot single selection using radio buttons\" aria-label=\"hotspot single radio button\">\r\n    <mat-icon>map</mat-icon>\r\n  </button>\r\n  <button mat-icon-button routerLink=\"hotspot-single-alt\" id=\"hotspotSingleAltNavButton\"\r\n    title=\"Navigate to demo of hotspot single selection using checkboxes\" aria-label=\"hotspot single checkbox\">\r\n    <mat-icon>map</mat-icon>\r\n  </button>\r\n  <button mat-icon-button routerLink=\"hotspot-max\" id=\"hotspotMaxNavButton\"\r\n    title=\"Navigate to demo of hotspot max selection\" aria-label=\"hotspot maximum choice\">\r\n    <mat-icon>map</mat-icon>\r\n  </button>\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/example/example.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/example/example.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExampleExampleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Data Table Match Example.</h1>\r\n  <p>\r\n    This field input uses a data table to allow table navigation capability.\r\n  </p>\r\n  <legend>The Three Stooges:</legend>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" role=\"table\">\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th  mat-header-cell *matHeaderCellDef scope=\"col\" [attr.role]=\"null\"> Stooge </th>\r\n      <td  mat-cell *matCellDef=\"let element\" scope=\"row\" [attr.role]=\"null\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Radio Button Column -->\r\n    <ng-container matColumnDef=\"radiobutton\">\r\n      <th mat-header-cell *matHeaderCellDef scope=\"col\" [attr.role]=\"null\"> Bald Headed </th>\r\n      <td mat-cell *matCellDef=\"let row\" [attr.role]=\"null\" scope=\"row\">\r\n        <div><mat-radio-button id=\"{{row.name}}-radio-label\" name=\"radio\" aria-label=\"Is {{row.name}} the Bald Headed stooge?\" ></mat-radio-button></div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Checkbox Column -->\r\n    <ng-container matColumnDef=\"select\">\r\n      <th mat-header-cell *matHeaderCellDef scope=\"col\" [attr.role]=\"null\"> Not Very Smart </th>\r\n      <td mat-cell *matCellDef=\"let row\" [attr.role]=\"null\" scope=\"row\">\r\n        <div>\r\n          <mat-checkbox\r\n            (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row) : null\"\r\n            [checked]=\"selection.isSelected(row)\"\r\n            aria-label=\"Is {{row.name}} not very smart\">\r\n          </mat-checkbox>\r\n        </div>    \r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" [attr.role]=\"null\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [attr.role]=\"null\">\r\n    </tr>\r\n  </table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-max/hotspot-max.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-max/hotspot-max.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotspotMaxHotspotMaxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <h1>Multiple Cardinality Hotspot with Max Choice Example.</h1>\r\n    <p>\r\n        This input uses checkboxes overlaid on an image to allow users to click the appropriate answer based on the visual relationship\r\n        by using checkboxes on the map multiple cardinality is enabled.\r\n        Watching the length of the answer makes it possible to limit previous choices and notify a user that the max number of choices have been reached\r\n    </p>\r\n    <legend>Select two states located on the eastern seaboard from the below map of the United States:</legend>\r\n    <div class=\"hotspot-question\">\r\n        <img class=\"hotspot-image\" src=\"https://www.nationsonline.org/maps/USA_small.jpg\"\r\n            alt=\"A map of the contiguous United States\">\r\n            <!-- While trivial order the options so the DOM naturally traverses through answers left to right top to bottom to match natural reading-->\r\n        <div formArrayName=\"options\" *ngFor=\"let option of optionsFormArray.controls; let i = index\" class=\"{{optionsData[i].class}}\">\r\n            <mat-checkbox  id=\"{{optionsData[i].name}}\" [formControlName]=\"i\" (change)=\"click(option)\" \r\n            aria-label=\"{{optionsData[i].label}}\" [checked]=\"option.value\"></mat-checkbox>\r\n        </div> \r\n    </div>\r\n    <div role=\"region\" id=\"selectionAlerts\" aria-live=\"polite\">\r\n        <p *ngIf=\"this.selectedOptionlength > 0\" style=\"height: 0px; width: 0px; font-size: 0px;\">{{this.selectedOptionlength}} selections of a maximum of {{this.maxOptions}} have been made.</p>\r\n        <p *ngIf=\"this.maxLimitReached\" style=\"height: 0px; width: 0px; font-size: 0px;\">The maximum number of selections have been made.</p>\r\n        <p *ngIf=\"this.noneSelected\" style=\"height: 0px; width: 0px; font-size: 0px;\">All options have been de-selected.</p>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-single-alt/hotspot-single-alt.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-single-alt/hotspot-single-alt.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotspotSingleAltHotspotSingleAltComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n<div >\n    <h1>Single Cardinality Hotspot Example with Checkbox.</h1>\n    <p>\n        This input uses checkboxes overlaid on an image to allow users to select the appropriate answer based on the visual relationship.\n        By using checkboxes with a max limit of one choice single cardinality is enforced.\n    </p>\n    <legend>Select the city located in Colorado from the below map of the United States:</legend>\n    <div class=\"hotspot-question\">\n        <img class=\"hotspot-image\" src=\"https://www.nationsonline.org/maps/USA_small.jpg\"\n            alt=\"A map of the contiguous United States.\">\n            <div formArrayName=\"options\" *ngFor=\"let option of optionsFormArray.controls; let i = index\" class=\"{{optionsData[i].class}}\">\n                <mat-checkbox  id=\"{{optionsData[i].name}}\" [formControlName]=\"i\" (change)=\"click(option)\" \n                aria-label=\"{{optionsData[i].label}}\" [checked]=\"option.value\"></mat-checkbox>\n            </div> \n            <div role=\"region\" id=\"selectionAlerts\" aria-live=\"polite\">\n                <p *ngIf=\"this.selectedOptionlength > 0\" style=\"height: 0px; width: 0px; font-size: 0px;\">{{this.selectedOptionlength}} selections of a maximum of {{this.maxOptions}} have been made.</p>\n                <p *ngIf=\"this.maxLimitReached\" style=\"height: 0px; width: 0px; font-size: 0px;\">The maximum number of selections have been made.</p>\n                <p *ngIf=\"this.noneSelected\" style=\"height: 0px; width: 0px; font-size: 0px;\">All options have been de-selected.</p>\n            </div>\n    </div>\n</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-single/hotspot-single.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-single/hotspot-single.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotspotSingleHotspotSingleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div >\n    <h1>Single Cardinality Hotspot Example.</h1>\n    <p>\n        This input uses radio buttons overlaid on an image to allow users to click the appropriate answer based on the visual relationship.\n        By using radio buttons overlaid on the map single cardinality is enforced.\n    </p>\n    <legend>Select the city located in Colorado from the below map of the United States:</legend>\n    <div class=\"hotspot-question\">\n        <img class=\"hotspot-image\" src=\"https://www.nationsonline.org/maps/USA_small.jpg\"\n            alt=\"A map of the contiguous United States.\">\n\n            <mat-radio-button id=\"radio-1\" color=\"primary\" class=\"hotspot-option-1\" name=\"radio\" aria-label=\"Option 1 of 3 on Salt Lake City.\" ></mat-radio-button>\n\n            <mat-radio-button id=\"radio-2\" color=\"primary\"class=\"hotspot-option-2\" name=\"radio\" aria-label=\"Option 2 of 3 on Denver.\" ></mat-radio-button>\n\n            <mat-radio-button id=\"radio-3\"  color=\"primary\" class=\"hotspot-option-3\" name=\"radio\" aria-label=\"Option 3 of 3 on Houston.\" ></mat-radio-button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot/hotspot.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot/hotspot.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotspotHotspotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div >\r\n    <h1>Multiple Cardinality Hotspot Example.</h1>\r\n    <p>\r\n        This input uses checkboxes overlaid on an image to allow users to click the appropriate answer based on the visual relationship.\r\n        By using checkboxes on the map multiple cardinality is enabled and no limit is placed on the number of selected answers.\r\n    </p>\r\n    <legend>Select the states located on the eastern seaboard from the below map of the United States:</legend>\r\n    <div class=\"hotspot-question\">\r\n        <img class=\"hotspot-image\" src=\"https://www.nationsonline.org/maps/USA_small.jpg\"\r\n            alt=\"A map of the contiguous United States\">\r\n        <div class=\"hotspot-option-1\">\r\n            <mat-checkbox id=\"checkbox-1\" aria-label=\"Option 1 of 4 on Maine.\"> </mat-checkbox>\r\n        </div>\r\n        <div class=\"hotspot-option-2\">\r\n            <mat-checkbox id=\"checkbox-2\" aria-label=\"Option 2 of 4 on Virginia.\"> </mat-checkbox>\r\n        </div>\r\n        <div class=\"hotspot-option-3\">\r\n            <mat-checkbox id=\"checkbox-3\" aria-label=\"Option 3 of 4 on California.\"> </mat-checkbox>\r\n        </div>\r\n        <div class=\"hotspot-option-4\">\r\n            <mat-checkbox id=\"checkbox-4\" aria-label=\"Option 4 of 4 on Texas.\"> </mat-checkbox>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/match-alt/match-alt.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match-alt/match-alt.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMatchAltMatchAltComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h1>Drag and Drop Match Example Alternate Focus.</h1>\r\n  <p>\r\n    This field input uses a drag and drop input with an additional menu\r\n    navigation option to answer the question. When a user makes a selection the\r\n    focus is maintained on the selected option.\r\n  </p>\r\n  <legend>\r\n    Match the number patterns to the correct rule. Move each number pattern to\r\n    the correct location.\r\n  </legend>\r\n  <div id=\"app\" cdkDropListGroup cdkTrapFocus>\r\n    <div\r\n      *ngFor=\"let key of arrayOptionList; let catIndex = index\"\r\n      class=\"example-container-1\"\r\n    >\r\n      <label\r\n        id=\"{{ key.name }}-Label\"\r\n        style=\"text-align: center\"\r\n        for=\"{{ key.name }}\"\r\n        >{{ key.name }}\r\n        <span style=\"height: 0px; width: 0px; font-size: 0px\">\r\n          {{ catIndex + 1 }} of {{ arrayOptionList.length }} with\r\n          {{ key.values.length }} items</span\r\n        >\r\n      </label>\r\n      <div\r\n        cdkDropList\r\n        cdkDropListOrientation=\"horizontal\"\r\n        id=\"{{ key.name }}\"\r\n        [cdkDropListData]=\"key.values\"\r\n        class=\"example-list\"\r\n        cdkDropListSortingDisabled\r\n        (cdkDropListDropped)=\"drop($event)\"\r\n      >\r\n        <button\r\n          class=\"example-box\"\r\n          *ngFor=\"let item of key.values; let i = index; let cat = key\"\r\n          cdkDrag\r\n          id=\"{{ item }}\"\r\n          attr.aria-label=\"{{ item }} in the {{ key.name }} list option  {{\r\n            i + 1\r\n          }} of {{ key.values.length }}\"\r\n          [matMenuTriggerFor]=\"menu\"\r\n          [matMenuTriggerRestoreFocus]=\"false\"\r\n        >\r\n          {{ item }}\r\n          <mat-menu role=\"menu\" #menu=\"matMenu\">\r\n            <ng-container\r\n              *ngFor=\"let option of arrayOptionList; let optionIndex = index\"\r\n            >\r\n              <button\r\n                *ngIf=\"\r\n                  catIndex != optionIndex &&\r\n                  (option.values.length < 1 || option.name == 'Options')\r\n                \"\r\n                mat-menu-item\r\n                attr.aria-label=\"place {{ item }} in the {{ option.name }} list\"\r\n                (click)=\"dropcustom(key.values[i], key.name, option)\"\r\n              >\r\n                {{ option.name }}\r\n              </button>\r\n            </ng-container>\r\n          </mat-menu>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div role=\"region\" id=\"selectionAlerts\" aria-live=\"assertive\">\r\n      <p id=\"selectionMoved\" style=\"height: 0px; width: 0px; font-size: 0px\">\r\n        {{ this.moveMessage }}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMatchMatchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h1>Drag and Drop Match Example.</h1>\r\n  <p>\r\n    This field input uses a drag and drop input with an additional menu\r\n    navigation option to answer the question. When a user makes a selection the\r\n    focus is moved to the first different option.\r\n  </p>\r\n  <legend>\r\n    Match the number patterns to the correct rule. Move each number pattern to\r\n    the correct location.\r\n  </legend>\r\n  <div id=\"app\" cdkDropListGroup cdkTrapFocus>\r\n    <div\r\n      *ngFor=\"let key of arrayOptionList; let catIndex = index\"\r\n      class=\"example-container-1\"\r\n    >\r\n      <label\r\n        id=\"{{ key.name }}-Label\"\r\n        style=\"text-align: center\"\r\n        for=\"{{ key.name }}\"\r\n        >{{ key.name }}\r\n        <span style=\"height: 0px; width: 0px; font-size: 0px\">\r\n          {{ catIndex + 1 }} of {{ arrayOptionList.length }} with\r\n          {{ key.values.length }} items</span\r\n        >\r\n      </label>\r\n      <div\r\n        cdkDropList\r\n        cdkDropListOrientation=\"horizontal\"\r\n        id=\"{{ key.name }}\"\r\n        [cdkDropListData]=\"key.values\"\r\n        class=\"example-list\"\r\n        cdkDropListSortingDisabled\r\n        (cdkDropListDropped)=\"drop($event)\"\r\n      >\r\n        <button\r\n          class=\"example-box\"\r\n          *ngFor=\"let item of key.values; let i = index; let cat = key\"\r\n          cdkDrag\r\n          id=\"{{ item }}\"\r\n          attr.aria-label=\"{{ item }} in the {{ key.name }} list option  {{\r\n            i + 1\r\n          }} of {{ key.values.length }}\"\r\n          [matMenuTriggerFor]=\"menu\"\r\n          [matMenuTriggerRestoreFocus]=\"false\"\r\n        >\r\n          {{ item }}\r\n          <mat-menu role=\"menu\" #menu=\"matMenu\">\r\n            <ng-container\r\n              *ngFor=\"let option of arrayOptionList; let optionIndex = index\"\r\n            >\r\n              <button\r\n                *ngIf=\"\r\n                  catIndex != optionIndex &&\r\n                  (option.values.length < 1 || option.name == 'Options')\r\n                \"\r\n                mat-menu-item\r\n                attr.aria-label=\"place {{ item }} in {{ option.name }}\"\r\n                (click)=\"dropcustom(key.values[i], key.name, option)\"\r\n              >\r\n                {{ option.name }}\r\n              </button>\r\n            </ng-container>\r\n          </mat-menu>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div role=\"region\" id=\"selectionAlerts\" aria-live=\"assertive\">\r\n      <p id=\"selectionMoved\" style=\"height: 0px; width: 0px; font-size: 0px\">\r\n        {{ this.moveMessage }}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <h1>Presentation Table Match Example.</h1>\r\n  <p>\r\n    This field input uses a presentation table to remove table navigation capability.\r\n    It is unnecesarry to understand the physical layout of table to be able to answer the questions.\r\n  </p>\r\n  <legend>The Three Stooges:</legend>\r\n\r\n  <table role=\"presentation\" class=\"mat-elevation-z8\">\r\n    <thead role=\"presentation\">\r\n      <tr role=\"presentation\">\r\n        <td role=\"presentation\" aria-hidden=\"true\">Stooge</td>\r\n        <td role=\"presentation\"  aria-hidden=\"true\" *ngFor=\"let stooge of questionData\">{{stooge.name}}</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody role=\"presentation\">\r\n      <tr role=\"presentation\">\r\n        <td role=\"presentation\" aria-hidden=\"true\">Is Bald Headed</td>\r\n            <td role=\"presentation\" *ngFor=\"let stooge of questionData\" scope=\"row\">\r\n              <div>\r\n                  <mat-radio-button value=\"{{stooge.name}}\" \r\n                    id=\"{{stooge.name}}-radio-label\" name=\"radio\"\r\n                    aria-label=\"Is {{stooge.name}} the one Bald Headed stooge?\"\r\n                    (click)=\"radioChange(stooge)\"\r\n                   [checked]=\"this.form.controls['isBald'].value === stooge.name\">\r\n                  </mat-radio-button>\r\n              </div>\r\n          </td>      \r\n      </tr>\r\n      <tr role=\"presentation\">\r\n        <td role=\"presentation\" aria-hidden=\"true\">Is not very smart</td>\r\n        <td role=\"presentation\" *ngFor=\"let stooge of questionData\" [attr.role]=\"null\" scope=\"row\">\r\n          <div>\r\n            <mat-checkbox aria-label=\"Is {{stooge.name}} not very smart\">\r\n            </mat-checkbox>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p.header {\n  text-align: center;\n  font: 30px Garamond, sans-serif;\n}\n\n.noDisplay {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxIdW50ZXJfY29ycC1BY2Nlc3NpYmlsaXR5LVRlc3RiZWQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udDozMHB4IEdhcmFtb25kLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5ub0Rpc3BsYXkge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH0iLCJwLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogMzBweCBHYXJhbW9uZCwgc2Fucy1zZXJpZjtcbn1cblxuLm5vRGlzcGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Hunter-Accessibility-Testbed';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'hunter-accessibility-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _match_match_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./match/match.component */
    "./src/app/match/match.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _hotspot_hotspot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./hotspot/hotspot.component */
    "./src/app/hotspot/hotspot.component.ts");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./table/table.component */
    "./src/app/table/table.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _example_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./example/example.component */
    "./src/app/example/example.component.ts");
    /* harmony import */


    var _hotspot_single_hotspot_single_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./hotspot-single/hotspot-single.component */
    "./src/app/hotspot-single/hotspot-single.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _hotspot_max_hotspot_max_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./hotspot-max/hotspot-max.component */
    "./src/app/hotspot-max/hotspot-max.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _match_alt_match_alt_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./match-alt/match-alt.component */
    "./src/app/match-alt/match-alt.component.ts");
    /* harmony import */


    var _hotspot_single_alt_hotspot_single_alt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./hotspot-single-alt/hotspot-single-alt.component */
    "./src/app/hotspot-single-alt/hotspot-single-alt.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _match_match_component__WEBPACK_IMPORTED_MODULE_12__["MatchComponent"], _match_alt_match_alt_component__WEBPACK_IMPORTED_MODULE_23__["MatchAltComponent"], _hotspot_hotspot_component__WEBPACK_IMPORTED_MODULE_14__["HotspotComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_18__["TableSelectionExample"], _hotspot_single_hotspot_single_component__WEBPACK_IMPORTED_MODULE_19__["HotspotSingleComponent"], _hotspot_single_alt_hotspot_single_alt_component__WEBPACK_IMPORTED_MODULE_24__["HotspotSingleAltComponent"], _hotspot_max_hotspot_max_component__WEBPACK_IMPORTED_MODULE_21__["HotspotMaxComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_16__["routing"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _hotspot_hotspot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hotspot/hotspot.component */
    "./src/app/hotspot/hotspot.component.ts");
    /* harmony import */


    var _match_match_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./match/match.component */
    "./src/app/match/match.component.ts");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./table/table.component */
    "./src/app/table/table.component.ts");
    /* harmony import */


    var _example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./example/example.component */
    "./src/app/example/example.component.ts");
    /* harmony import */


    var _hotspot_single_hotspot_single_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hotspot-single/hotspot-single.component */
    "./src/app/hotspot-single/hotspot-single.component.ts");
    /* harmony import */


    var _hotspot_max_hotspot_max_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hotspot-max/hotspot-max.component */
    "./src/app/hotspot-max/hotspot-max.component.ts");
    /* harmony import */


    var _match_alt_match_alt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./match-alt/match-alt.component */
    "./src/app/match-alt/match-alt.component.ts");
    /* harmony import */


    var _hotspot_single_alt_hotspot_single_alt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hotspot-single-alt/hotspot-single-alt.component */
    "./src/app/hotspot-single-alt/hotspot-single-alt.component.ts");

    var appRoutes = [{
      path: '',
      redirectTo: '/table',
      pathMatch: 'full'
    }, {
      path: 'match',
      component: _match_match_component__WEBPACK_IMPORTED_MODULE_3__["MatchComponent"]
    }, {
      path: 'match-alt',
      component: _match_alt_match_alt_component__WEBPACK_IMPORTED_MODULE_8__["MatchAltComponent"]
    }, {
      path: 'hotspot',
      component: _hotspot_hotspot_component__WEBPACK_IMPORTED_MODULE_2__["HotspotComponent"]
    }, {
      path: 'hotspot-single',
      component: _hotspot_single_hotspot_single_component__WEBPACK_IMPORTED_MODULE_6__["HotspotSingleComponent"]
    }, {
      path: 'hotspot-single-alt',
      component: _hotspot_single_alt_hotspot_single_alt_component__WEBPACK_IMPORTED_MODULE_9__["HotspotSingleAltComponent"]
    }, {
      path: 'hotspot-max',
      component: _hotspot_max_hotspot_max_component__WEBPACK_IMPORTED_MODULE_7__["HotspotMaxComponent"]
    }, {
      path: 'table',
      component: _table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]
    }, {
      path: 'example',
      component: _example_example_component__WEBPACK_IMPORTED_MODULE_5__["TableSelectionExample"]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-nav-list.list-horizontal {\n  padding: 0;\n}\nmat-nav-list.list-horizontal .mat-list-item {\n  display: inline-block;\n  height: auto;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFByb2plY3RzXFxIdW50ZXJfY29ycC1BY2Nlc3NpYmlsaXR5LVRlc3RiZWQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7QURBRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1uYXYtbGlzdC5saXN0LWhvcml6b250YWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59IiwibWF0LW5hdi1saXN0Lmxpc3QtaG9yaXpvbnRhbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5tYXQtbmF2LWxpc3QubGlzdC1ob3Jpem9udGFsIC5tYXQtbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/

    /**
     * This is a very basic header, No signifiant accessibility considerations have been made outside of labels and unique IDs
     * Improvements --
     *    add a skip nav to this component that passes focus to the first fosusable element of the main component.
     */
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    })
    /**
     * This is a very basic header, No signifiant accessibility considerations have been made outside of labels and unique IDs
     * Improvements --
     *    add a skip nav to this component that passes focus to the first fosusable element of the main component.
     */
    ], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/example/example.component.scss":
  /*!************************************************!*\
    !*** ./src/app/example/example.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExampleExampleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.noDisplay {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9DOlxcUHJvamVjdHNcXEh1bnRlcl9jb3JwLUFjY2Vzc2liaWxpdHktVGVzdGJlZC9zcmNcXGFwcFxcZXhhbXBsZVxcZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ub0Rpc3BsYXkge1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub0Rpc3BsYXkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/example/example.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/example/example.component.ts ***!
    \**********************************************/

  /*! exports provided: TableSelectionExample */

  /***/
  function srcAppExampleExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableSelectionExample", function () {
      return TableSelectionExample;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js"); //A simple representation of potential data to pass in into the table using the above interface.


    var ELEMENT_DATA = [{
      name: 'Larry'
    }, {
      name: 'Moe'
    }, {
      name: 'Curly'
    }];
    /**
     * A Mat table implementation with acessibility considerations made.
     * The tableSelectionExample is a data table so it can be navigated as a table with screen readers by pressing 't'.
     * To avoid issues with the table navigation put aria-labels on the DOM elements composing the question inputs.
     * If radio buttons are used because of the tab order it is important to use this data table
     * over a presentation table as it allows users to navigate with table shortcuts and avoid the tab order bypassing options.
     *
     */

    var TableSelectionExample = /*#__PURE__*/function () {
      /**
       * A Mat table implementation with acessibility considerations made.
       * The tableSelectionExample is a data table so it can be navigated as a table with screen readers by pressing 't'.
       * To avoid issues with the table navigation put aria-labels on the DOM elements composing the question inputs.
       * If radio buttons are used because of the tab order it is important to use this data table
       * over a presentation table as it allows users to navigate with table shortcuts and avoid the tab order bypassing options.
       *
       */
      function TableSelectionExample() {
        _classCallCheck(this, TableSelectionExample);

        //Basic Mat Table Config
        this.displayedColumns = ['name', 'radiobutton', 'select'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
      }
      /** Whether the number of selected elements matches the total number of rows. */


      _createClass(TableSelectionExample, [{
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this.selection.select(row);
          });
        }
        /** The label for the checkbox on the passed row */

      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ", 1);
        }
      }]);

      return TableSelectionExample;
    }();

    TableSelectionExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-example',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./example.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/example/example.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./example.component.scss */
      "./src/app/example/example.component.scss"))["default"]]
    })], TableSelectionExample);
    /***/
  },

  /***/
  "./src/app/hotspot-max/hotspot-max.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/hotspot-max/hotspot-max.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotspotMaxHotspotMaxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hotspot-question {\n  position: relative;\n}\n.hotspot-question .hotspot-image {\n  width: 500px;\n}\n.hotspot-question .hotspot-option-1 {\n  top: 73px;\n  left: 467px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-2 {\n  top: 176px;\n  left: 415px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-3 {\n  top: 186px;\n  left: 36px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-4 {\n  top: 264px;\n  left: 224px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #005691 !important;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .hotspot-question .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #005691;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90c3BvdC1tYXgvQzpcXFByb2plY3RzXFxIdW50ZXJfY29ycC1BY2Nlc3NpYmlsaXR5LVRlc3RiZWQvc3JjXFxhcHBcXGhvdHNwb3QtbWF4XFxob3RzcG90LW1heC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG90c3BvdC1tYXgvaG90c3BvdC1tYXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7RUFDSSxZQUFBO0FDQ1I7QURFSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQU47QURHSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRE47QURJSTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRk47QURJSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRk47QURJSTtFQUVJLG9DQUFBO0FDSFI7QURNSTtFQUNJLHlCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9ob3RzcG90LW1heC9ob3RzcG90LW1heC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbiAgLmhvdHNwb3QtcXVlc3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmhvdHNwb3QtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvdHNwb3Qtb3B0aW9uLTEge1xyXG4gICAgICB0b3A6IDczcHg7XHJcbiAgICAgIGxlZnQ6IDQ2N3B4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICBcclxuICAgIC5ob3RzcG90LW9wdGlvbi0yIHtcclxuICAgICAgdG9wOiAxNzZweDtcclxuICAgICAgbGVmdDogNDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhvdHNwb3Qtb3B0aW9uLTMge1xyXG4gICAgICB0b3A6IDE4NnB4O1xyXG4gICAgICBsZWZ0OiAzNnB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5ob3RzcG90LW9wdGlvbi00IHsgICAgXHJcbiAgICAgIHRvcDogMjY0cHg7XHJcbiAgICAgIGxlZnQ6IDIyNHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTEhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xyXG4gICAgICB9XHJcblxyXG59XHJcbiAgXHJcblxyXG5cclxuIiwiLmhvdHNwb3QtcXVlc3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG90c3BvdC1xdWVzdGlvbiAuaG90c3BvdC1pbWFnZSB7XG4gIHdpZHRoOiA1MDBweDtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LW9wdGlvbi0xIHtcbiAgdG9wOiA3M3B4O1xuICBsZWZ0OiA0NjdweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaG90c3BvdC1xdWVzdGlvbiAuaG90c3BvdC1vcHRpb24tMiB7XG4gIHRvcDogMTc2cHg7XG4gIGxlZnQ6IDQxNXB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LW9wdGlvbi0zIHtcbiAgdG9wOiAxODZweDtcbiAgbGVmdDogMzZweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaG90c3BvdC1xdWVzdGlvbiAuaG90c3BvdC1vcHRpb24tNCB7XG4gIHRvcDogMjY0cHg7XG4gIGxlZnQ6IDIyNHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MSAhaW1wb3J0YW50O1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLmhvdHNwb3QtcXVlc3Rpb24gLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/hotspot-max/hotspot-max.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hotspot-max/hotspot-max.component.ts ***!
    \******************************************************/

  /*! exports provided: HotspotMaxComponent */

  /***/
  function srcAppHotspotMaxHotspotMaxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotspotMaxComponent", function () {
      return HotspotMaxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var HotspotMaxComponent =
    /*#__PURE__*/

    /**
     * HotspotMax is a more complex implementation of the original hotspot taking advantage of angular reactive forms.
     *  For example this component sets a max number of selectable options which is then tracked on a hotspot selection.
     * Accessibility --
     *  Originally options were fully disabled upon the max count being met, however this can be disorienting and misleading
     *    for screen readers users as they could make the max selections and then not see other options available to them
     *  The aria-live region is important for broadcasting specific notifications to the user about the number of selections
     *    currently zero, 1-n, and max count messages will be read.
     * Improvements --
     *   Implementing configruable aria-live region messages will enable question specific data to be read to users.
     *   Full implementation of the form to allow submission and verification of answers.
     */
    function () {
      //Reactive Form Boilerplate. Builds the reactive form in the component.
      function HotspotMaxComponent(formBuilder) {
        _classCallCheck(this, HotspotMaxComponent);

        this.formBuilder = formBuilder; //Counts for max length

        this.selectedOptionlength = 0;
        this.maxOptions = 2; //Booleans for live region display

        this.maxLimitReached = false;
        this.noneSelected = false; //Configurable data for the question, can be expanded upon as needed. 
        // class matches the css class for the overlay
        // label is a hardcoded aria-label, this could be done using the index, optionslength, and name to be robust
        // name is the name and value passed through

        this.optionsData = [{
          id: 1,
          name: 'Maine',
          "class": "hotspot-option-1",
          label: "Option 1 of 4 on Maine."
        }, {
          id: 2,
          name: 'Virginia',
          "class": "hotspot-option-2",
          label: "Option 2 of 4 on Virginia."
        }, {
          id: 3,
          name: 'California',
          "class": "hotspot-option-3",
          label: "Option 3 of 4 on California."
        }, {
          id: 4,
          name: 'Texas',
          "class": "hotspot-option-4",
          label: "Option 4 of 4 on Texas."
        }];
        this.form = this.formBuilder.group({
          options: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.addCheckboxes();
      } //Reactive Form Boilerplate. Gets the array of option inputs.


      _createClass(HotspotMaxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Reactive Form Boilerplate and helper.

      }, {
        key: "addCheckboxes",
        value: function addCheckboxes() {
          var _this2 = this;

          this.optionsData.forEach(function () {
            return _this2.optionsFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
          });
        }
        /**
         * Click could be named better...
         * runs business logic to check enforce max choice limitations and enables display of aria live region messages.
         */

      }, {
        key: "click",
        value: function click(data) {
          var _this3 = this;

          this.maxLimitReached = false;
          this.noneSelected = false;

          if (this.selectedOptionlength === this.maxOptions) {
            data.setValue(false);
          }

          this.selectedOptionlength = this.form.value.options.map(function (checked, i) {
            return checked ? _this3.optionsData[i].id : null;
          }).filter(function (v) {
            return v !== null;
          }).length;

          if (this.selectedOptionlength === 0) {
            this.noneSelected = true;
          }

          if (this.selectedOptionlength === this.maxOptions) {
            this.maxLimitReached = true;
          }
        }
        /**
         * Unused functon would enable the reactive form submit.
         */

      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          var selectedOptionIds = this.form.value.options.map(function (checked, i) {
            return checked ? _this4.optionsData[i].id : null;
          }).filter(function (v) {
            return v !== null;
          });
        }
      }, {
        key: "optionsFormArray",
        get: function get() {
          return this.form.controls.options;
        }
      }]);

      return HotspotMaxComponent;
    }();

    HotspotMaxComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    HotspotMaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotspot-max',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotspot-max.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-max/hotspot-max.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotspot-max.component.scss */
      "./src/app/hotspot-max/hotspot-max.component.scss"))["default"]]
    })
    /**
     * HotspotMax is a more complex implementation of the original hotspot taking advantage of angular reactive forms.
     *  For example this component sets a max number of selectable options which is then tracked on a hotspot selection.
     * Accessibility --
     *  Originally options were fully disabled upon the max count being met, however this can be disorienting and misleading
     *    for screen readers users as they could make the max selections and then not see other options available to them
     *  The aria-live region is important for broadcasting specific notifications to the user about the number of selections
     *    currently zero, 1-n, and max count messages will be read.
     * Improvements --
     *   Implementing configruable aria-live region messages will enable question specific data to be read to users.
     *   Full implementation of the form to allow submission and verification of answers.
     */
    ], HotspotMaxComponent);
    /***/
  },

  /***/
  "./src/app/hotspot-single-alt/hotspot-single-alt.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/hotspot-single-alt/hotspot-single-alt.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotspotSingleAltHotspotSingleAltComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hotspot-question {\n  position: relative;\n}\n.hotspot-question .hotspot-image {\n  width: 500px;\n}\n.hotspot-question .hotspot-option-1 {\n  top: 142px;\n  left: 113px;\n  color: black;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-2 {\n  top: 164px;\n  left: 170px;\n  color: black;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-3 {\n  top: 285px;\n  left: 262px;\n  color: black;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #005691 !important;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .hotspot-question .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #005691;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90c3BvdC1zaW5nbGUtYWx0L0M6XFxQcm9qZWN0c1xcSHVudGVyX2NvcnAtQWNjZXNzaWJpbGl0eS1UZXN0YmVkL3NyY1xcYXBwXFxob3RzcG90LXNpbmdsZS1hbHRcXGhvdHNwb3Qtc2luZ2xlLWFsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG90c3BvdC1zaW5nbGUtYWx0L2hvdHNwb3Qtc2luZ2xlLWFsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRENJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdJO0VBRUksb0NBQUE7QUNGUjtBREtJO0VBQ0kseUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2hvdHNwb3Qtc2luZ2xlLWFsdC9ob3RzcG90LXNpbmdsZS1hbHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90c3BvdC1xdWVzdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuaG90c3BvdC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaG90c3BvdC1vcHRpb24tMSB7XHJcbiAgICAgICAgdG9wOiAxNDJweDtcclxuICAgICAgICBsZWZ0OiAxMTNweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICBcclxuICAgIC5ob3RzcG90LW9wdGlvbi0yIHtcclxuICAgICAgICB0b3A6IDE2NHB4O1xyXG4gICAgICAgIGxlZnQ6IDE3MHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhvdHNwb3Qtb3B0aW9uLTMge1xyXG4gICAgICAgIHRvcDogMjg1cHg7XHJcbiAgICAgICAgbGVmdDogMjYycHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTEhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xyXG4gICAgICB9XHJcblxyXG59XHJcbiAgIiwiLmhvdHNwb3QtcXVlc3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG90c3BvdC1xdWVzdGlvbiAuaG90c3BvdC1pbWFnZSB7XG4gIHdpZHRoOiA1MDBweDtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LW9wdGlvbi0xIHtcbiAgdG9wOiAxNDJweDtcbiAgbGVmdDogMTEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaG90c3BvdC1xdWVzdGlvbiAuaG90c3BvdC1vcHRpb24tMiB7XG4gIHRvcDogMTY0cHg7XG4gIGxlZnQ6IDE3MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gLmhvdHNwb3Qtb3B0aW9uLTMge1xuICB0b3A6IDI4NXB4O1xuICBsZWZ0OiAyNjJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MSAhaW1wb3J0YW50O1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLmhvdHNwb3QtcXVlc3Rpb24gLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/hotspot-single-alt/hotspot-single-alt.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/hotspot-single-alt/hotspot-single-alt.component.ts ***!
    \********************************************************************/

  /*! exports provided: HotspotSingleAltComponent */

  /***/
  function srcAppHotspotSingleAltHotspotSingleAltComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotspotSingleAltComponent", function () {
      return HotspotSingleAltComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var HotspotSingleAltComponent =
    /*#__PURE__*/

    /**
     * Hotspot Single component is the same as hotspotMaxComponent but configured to one selection.
     * This is meant to stand in contrast to the hotspotSingleComponent which uses radio buttons instead.
     * No siginificant implementation differences from hotspotMaxComponent.
     */
    function () {
      function HotspotSingleAltComponent(formBuilder) {
        _classCallCheck(this, HotspotSingleAltComponent);

        this.formBuilder = formBuilder;
        this.selectedOptionlength = 0;
        this.maxOptions = 1;
        this.maxLimitReached = false;
        this.noneSelected = false;
        this.optionsData = [{
          id: "1",
          "class": "hotspot-option-1",
          name: "Salt Lake City",
          label: "Option 1 of 3 on Salt Lake City."
        }, {
          id: "2",
          "class": "hotspot-option-2",
          name: "Denver",
          label: "Option 2 of 3 on Denver."
        }, {
          id: "3",
          "class": "hotspot-option-3",
          name: "Houston",
          label: "Option 3 of 3 on Houston."
        }];
        this.form = this.formBuilder.group({
          options: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.addCheckboxes();
      }

      _createClass(HotspotSingleAltComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCheckboxes",
        value: function addCheckboxes() {
          var _this5 = this;

          this.optionsData.forEach(function () {
            return _this5.optionsFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
          });
        }
      }, {
        key: "click",
        value: function click(data) {
          var _this6 = this;

          this.noneSelected = false;
          this.maxLimitReached = false;

          if (this.selectedOptionlength === this.maxOptions) {
            data.setValue(false);
          }

          this.selectedOptionlength = this.form.value.options.map(function (checked, i) {
            return checked ? _this6.optionsData[i].id : null;
          }).filter(function (v) {
            return v !== null;
          }).length;

          if (this.selectedOptionlength === 0) {
            this.noneSelected = true;
          }

          if (this.selectedOptionlength === this.maxOptions) {
            this.maxLimitReached = true;
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          var selectedOptionIds = this.form.value.options.map(function (checked, i) {
            return checked ? _this7.optionsData[i].id : null;
          }).filter(function (v) {
            return v !== null;
          });
        }
      }, {
        key: "optionsFormArray",
        get: function get() {
          return this.form.controls.options;
        }
      }]);

      return HotspotSingleAltComponent;
    }();

    HotspotSingleAltComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    HotspotSingleAltComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotspot-single-alt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotspot-single-alt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-single-alt/hotspot-single-alt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotspot-single-alt.component.scss */
      "./src/app/hotspot-single-alt/hotspot-single-alt.component.scss"))["default"]]
    })
    /**
     * Hotspot Single component is the same as hotspotMaxComponent but configured to one selection.
     * This is meant to stand in contrast to the hotspotSingleComponent which uses radio buttons instead.
     * No siginificant implementation differences from hotspotMaxComponent.
     */
    ], HotspotSingleAltComponent);
    /***/
  },

  /***/
  "./src/app/hotspot-single/hotspot-single.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/hotspot-single/hotspot-single.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotspotSingleHotspotSingleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hotspot-question {\n  position: relative;\n}\n.hotspot-question .hotspot-image {\n  width: 500px;\n}\n.hotspot-question .hotspot-option-1 {\n  top: 142px;\n  left: 113px;\n  color: black;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-2 {\n  top: 164px;\n  left: 170px;\n  color: black;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-3 {\n  top: 285px;\n  left: 262px;\n  color: black;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #005691 !important;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .hotspot-question .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #005691;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90c3BvdC1zaW5nbGUvQzpcXFByb2plY3RzXFxIdW50ZXJfY29ycC1BY2Nlc3NpYmlsaXR5LVRlc3RiZWQvc3JjXFxhcHBcXGhvdHNwb3Qtc2luZ2xlXFxob3RzcG90LXNpbmdsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG90c3BvdC1zaW5nbGUvaG90c3BvdC1zaW5nbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NSO0FERUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUVJLG9DQUFBO0FDRlI7QURLSTtFQUNJLHlCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9ob3RzcG90LXNpbmdsZS9ob3RzcG90LXNpbmdsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3RzcG90LXF1ZXN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5ob3RzcG90LWltYWdlIHtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ob3RzcG90LW9wdGlvbi0xIHtcclxuICAgICAgICB0b3A6IDE0MnB4O1xyXG4gICAgICAgIGxlZnQ6IDExM3B4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhvdHNwb3Qtb3B0aW9uLTIge1xyXG4gICAgICAgIHRvcDogMTY0cHg7XHJcbiAgICAgICAgbGVmdDogMTcwcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaG90c3BvdC1vcHRpb24tMyB7XHJcbiAgICAgICAgdG9wOiAyODVweDtcclxuICAgICAgICBsZWZ0OiAyNjJweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MSFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XHJcbiAgICAgIH1cclxuXHJcbn1cclxuICAiLCIuaG90c3BvdC1xdWVzdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LWltYWdlIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gLmhvdHNwb3Qtb3B0aW9uLTEge1xuICB0b3A6IDE0MnB4O1xuICBsZWZ0OiAxMTNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LW9wdGlvbi0yIHtcbiAgdG9wOiAxNjRweDtcbiAgbGVmdDogMTcwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaG90c3BvdC1xdWVzdGlvbiAuaG90c3BvdC1vcHRpb24tMyB7XG4gIHRvcDogMjg1cHg7XG4gIGxlZnQ6IDI2MnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxICFpbXBvcnRhbnQ7XG59XG4uaG90c3BvdC1xdWVzdGlvbiA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAuaG90c3BvdC1xdWVzdGlvbiAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hotspot-single/hotspot-single.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/hotspot-single/hotspot-single.component.ts ***!
    \************************************************************/

  /*! exports provided: HotspotSingleComponent */

  /***/
  function srcAppHotspotSingleHotspotSingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotspotSingleComponent", function () {
      return HotspotSingleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotspotSingleComponent =
    /*#__PURE__*/

    /**
     * Hotspot Single component is basically the same as hotspotComponent but uses radio buttons instead.
     * No siginificant implementation differences.
     */
    function () {
      function HotspotSingleComponent() {
        _classCallCheck(this, HotspotSingleComponent);
      }

      _createClass(HotspotSingleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotspotSingleComponent;
    }();

    HotspotSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotspot-single',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotspot-single.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot-single/hotspot-single.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotspot-single.component.scss */
      "./src/app/hotspot-single/hotspot-single.component.scss"))["default"]]
    })
    /**
     * Hotspot Single component is basically the same as hotspotComponent but uses radio buttons instead.
     * No siginificant implementation differences.
     */
    ], HotspotSingleComponent);
    /***/
  },

  /***/
  "./src/app/hotspot/hotspot.component.scss":
  /*!************************************************!*\
    !*** ./src/app/hotspot/hotspot.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotspotHotspotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hotspot-question {\n  position: relative;\n}\n.hotspot-question .hotspot-image {\n  width: 500px;\n}\n.hotspot-question .hotspot-option-1 {\n  top: 73px;\n  left: 467px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-2 {\n  top: 176px;\n  left: 415px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-3 {\n  top: 186px;\n  left: 36px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question .hotspot-option-4 {\n  top: 264px;\n  left: 224px;\n  padding: 0px;\n  position: absolute;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #005691 !important;\n}\n.hotspot-question ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .hotspot-question .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #005691;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90c3BvdC9DOlxcUHJvamVjdHNcXEh1bnRlcl9jb3JwLUFjY2Vzc2liaWxpdHktVGVzdGJlZC9zcmNcXGFwcFxcaG90c3BvdFxcaG90c3BvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG90c3BvdC9ob3RzcG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUNBSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FERUk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FOO0FER0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ROO0FESUk7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESUk7RUFFSSxvQ0FBQTtBQ0hSO0FETUk7RUFDSSx5QkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvaG90c3BvdC9ob3RzcG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuICAuaG90c3BvdC1xdWVzdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuaG90c3BvdC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaG90c3BvdC1vcHRpb24tMSB7XHJcbiAgICAgIHRvcDogNzNweDtcclxuICAgICAgbGVmdDogNDY3cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhvdHNwb3Qtb3B0aW9uLTIge1xyXG4gICAgICB0b3A6IDE3NnB4O1xyXG4gICAgICBsZWZ0OiA0MTVweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaG90c3BvdC1vcHRpb24tMyB7XHJcbiAgICAgIHRvcDogMTg2cHg7XHJcbiAgICAgIGxlZnQ6IDM2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmhvdHNwb3Qtb3B0aW9uLTQgeyAgICBcclxuICAgICAgdG9wOiAyNjRweDtcclxuICAgICAgbGVmdDogMjI0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTY5MSFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2OTE7XHJcbiAgICAgIH1cclxuXHJcbn1cclxuICBcclxuXHJcblxyXG4iLCIuaG90c3BvdC1xdWVzdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LWltYWdlIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gLmhvdHNwb3Qtb3B0aW9uLTEge1xuICB0b3A6IDczcHg7XG4gIGxlZnQ6IDQ2N3B4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LW9wdGlvbi0yIHtcbiAgdG9wOiAxNzZweDtcbiAgbGVmdDogNDE1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gLmhvdHNwb3Qtb3B0aW9uLTMge1xuICB0b3A6IDE4NnB4O1xuICBsZWZ0OiAzNnB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob3RzcG90LXF1ZXN0aW9uIC5ob3RzcG90LW9wdGlvbi00IHtcbiAgdG9wOiAyNjRweDtcbiAgbGVmdDogMjI0cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmhvdHNwb3QtcXVlc3Rpb24gOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxICFpbXBvcnRhbnQ7XG59XG4uaG90c3BvdC1xdWVzdGlvbiA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAuaG90c3BvdC1xdWVzdGlvbiAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hotspot/hotspot.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/hotspot/hotspot.component.ts ***!
    \**********************************************/

  /*! exports provided: HotspotComponent */

  /***/
  function srcAppHotspotHotspotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotspotComponent", function () {
      return HotspotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotspotComponent =
    /*#__PURE__*/

    /**
     * The HotspotComponent implementation we assumed there was an image overlaid with checkbox's
     * or similar inputs for the visual presentation and tried to replicate.
     * Accessibility --
     *  We found it is helpful to order the answer options in the dom so that the DOM element's location matches
     *    the order of the visual representation so a screen reader user is presented the information
     *     in a similar order going top to bottom, left to right
     *  Outside of that aria-labels and specific input element considerations are all that are needed to
     *    make this Screen reader accessible.
     */
    function () {
      function HotspotComponent() {
        _classCallCheck(this, HotspotComponent);
      }

      _createClass(HotspotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotspotComponent;
    }();

    HotspotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotspot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotspot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotspot/hotspot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotspot.component.scss */
      "./src/app/hotspot/hotspot.component.scss"))["default"]]
    })
    /**
     * The HotspotComponent implementation we assumed there was an image overlaid with checkbox's
     * or similar inputs for the visual presentation and tried to replicate.
     * Accessibility --
     *  We found it is helpful to order the answer options in the dom so that the DOM element's location matches
     *    the order of the visual representation so a screen reader user is presented the information
     *     in a similar order going top to bottom, left to right
     *  Outside of that aria-labels and specific input element considerations are all that are needed to
     *    make this Screen reader accessible.
     */
    ], HotspotComponent);
    /***/
  },

  /***/
  "./src/app/match-alt/match-alt.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/match-alt/match-alt.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMatchAltMatchAltComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 15px 10px 25px 10px;\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n}\n\n.example-container-1 {\n  width: 400px;\n  max-width: 100%;\n  margin: auto;\n  display: block;\n  text-align: center;\n}\n\n.example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.example-box:focus {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border: black solid;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n#app {\n  text-align: center;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.noDisplay {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gtYWx0L0M6XFxQcm9qZWN0c1xcSHVudGVyX2NvcnAtQWNjZXNzaWJpbGl0eS1UZXN0YmVkL3NyY1xcYXBwXFxtYXRjaC1hbHRcXG1hdGNoLWFsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0Y2gtYWx0L21hdGNoLWFsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNERjs7QURNQTtFQUNFLFVBQUE7QUNIRjs7QURNQTtFQUNFLHNEQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSEY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2gtYWx0L21hdGNoLWFsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDE1cHggMTBweCAyNXB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wXHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lci0xIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94OmZvY3VzIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbiNhcHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDFweDtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbn1cclxuLm5vRGlzcGxheXtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNXB4IDEwcHggMjVweCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyLTEge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1ib3g6Zm9jdXMge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyOiBibGFjayBzb2xpZDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuI2FwcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG59XG5cbi5ub0Rpc3BsYXkge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/match-alt/match-alt.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/match-alt/match-alt.component.ts ***!
    \**************************************************/

  /*! exports provided: MatchAltComponent */

  /***/
  function srcAppMatchAltMatchAltComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchAltComponent", function () {
      return MatchAltComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");

    var MatchAltComponent =
    /*#__PURE__*/

    /**
     * MatchAltComponent is basically the same as MatchComponent but uses a different focus implementation.
     * No siginificant implementation differences.
     */
    function () {
      function MatchAltComponent() {
        _classCallCheck(this, MatchAltComponent);

        this.moveMessage = "";
        /*Defines the Question strucuture
         * In the case of match this is a series of arrays that are related by a series of
         * mutually exclusive strings shared by the array
         */

        this.arrayOptionList = [{
          name: "Options",
          values: ["2, 6, 10, 14", "1, 2, 8, 16", "4, 12, 20, 28"]
        }, {
          name: "Multiply by 2",
          values: []
        }, {
          name: "Text: Add 4",
          values: []
        }, {
          name: "Text: Add 8",
          values: []
        }];
      }

      _createClass(MatchAltComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.elements = [];
          this.attributes = [];
        }
      }, {
        key: "onOpenMenu",
        value: function onOpenMenu(menu) {
          menu.openMenu;
        }
      }, {
        key: "drop",
        value: function drop(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }
      }, {
        key: "dropcustom",
        value: function dropcustom(element, i, currentContainer) {
          var _this8 = this;

          var index1 = this.arrayOptionList[0].values.indexOf(element);
          var index2 = this.arrayOptionList[1].values.indexOf(element);
          var index3 = this.arrayOptionList[2].values.indexOf(element);

          if (index1 != -1) {
            this.arrayOptionList[0].values.splice(index1, 1);
          } else if (index2 != -1) {
            this.arrayOptionList[1].values.splice(index2, 1);
          } else if (index3 != -1) {
            this.arrayOptionList[2].values.splice(index3, 1);
          }

          currentContainer.values.push(element);
          this.moveMessage = "Moved " + element + " to " + currentContainer.name;
          setTimeout(function () {
            _this8.handleFocus(element, i);
          }, 250);
        }
        /**
         * Because the screen reader functionality is new, it is uncertain the best means of handling focus.
         * this implementation of handle focus maintains focus on the selected item as it is moved to a different list.
         *
         * @param elemId - Dom id of element
         * @param i - index of element
         */

      }, {
        key: "handleFocus",
        value: function handleFocus(elemId, i) {
          //find next elem of below
          this.arrayOptionList.forEach(function (optionList) {
            var tempListElement = document.getElementById(optionList.name);
            Array.from(tempListElement.children).forEach(function (element) {
              if (element.id === elemId) {
                var nextElem = document.getElementById(element.id);
                nextElem.focus();
              }
            });
          });
        }
      }]);

      return MatchAltComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchAltComponent.prototype, "elements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchAltComponent.prototype, "attributes", void 0);
    MatchAltComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-match-alt",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./match-alt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/match-alt/match-alt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./match-alt.component.scss */
      "./src/app/match-alt/match-alt.component.scss"))["default"]]
    })
    /**
     * MatchAltComponent is basically the same as MatchComponent but uses a different focus implementation.
     * No siginificant implementation differences.
     */
    ], MatchAltComponent);
    /***/
  },

  /***/
  "./src/app/match/match.component.scss":
  /*!********************************************!*\
    !*** ./src/app/match/match.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMatchMatchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 15px 10px 25px 10px;\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n}\n\n.example-container-1 {\n  width: 400px;\n  max-width: 100%;\n  margin: auto;\n  display: block;\n  text-align: center;\n}\n\n.example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.example-box:focus {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border: black solid;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n#app {\n  text-align: center;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.noDisplay {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gvQzpcXFByb2plY3RzXFxIdW50ZXJfY29ycC1BY2Nlc3NpYmlsaXR5LVRlc3RiZWQvc3JjXFxhcHBcXG1hdGNoXFxtYXRjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0Y2gvbWF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFHQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDREY7O0FETUE7RUFDRSxVQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hGOztBREtBO0VBQ0Usa0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21hdGNoL21hdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTVweCAxMHB4IDI1cHggMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3BcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyLTEge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6Zm9jdXMge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJvcmRlcjogYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuI2FwcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxufVxyXG4ubm9EaXNwbGF5e1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggMTBweCAyNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXItMSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5leGFtcGxlLWJveDpmb2N1cyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXI6IGJsYWNrIHNvbGlkO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4jYXBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLm5vRGlzcGxheSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/match/match.component.ts":
  /*!******************************************!*\
    !*** ./src/app/match/match.component.ts ***!
    \******************************************/

  /*! exports provided: MatchComponent */

  /***/
  function srcAppMatchMatchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchComponent", function () {
      return MatchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");

    var MatchComponent =
    /*#__PURE__*/

    /**
     * MatchComponent takes a CDKdroplist component and inserts Mat menus into the component.
     * The menus are based on the structure in the the arrayOptionList.
     * Which is the dragBay/List and then the options contained in each List.
     * By default all the options are placed in the options list to be moved into the "answer" bays/lists.
     *
     * Accessibility -- By using the menus inserted into the Dom that display on a click event it allows
     *  screen reader users to place options into the approriate location without needing to know the visual layout
     *  a key here is iterating thorugh and using angular bindings to create dynamic labels so a user knows
     *  the number of options in each menu. An aria live region is used to notify users of placements.
     *
     * Improvements -- There is a slight delay in the announcement of options placement to the user despite the live region being set ot assertive
     *    Implement as form and functionality to check the list for correctness via submit functions.
     */
    function () {
      function MatchComponent() {
        _classCallCheck(this, MatchComponent);

        this.moveMessage = "";
        /*Defines the Question strucuture
         * In the case of match this is a series of arrays that are related by a series of
         * mutually exclusive strings shared by the array
         */

        this.arrayOptionList = [{
          name: "Options",
          values: ["2, 6, 10, 14", "1, 2, 8, 16", "4, 12, 20, 28"]
        }, {
          name: "Multiply by 2",
          values: []
        }, {
          name: "Text: Add 4",
          values: []
        }, {
          name: "Text: Add 8",
          values: []
        }];
      }

      _createClass(MatchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.elements = [];
          this.attributes = [];
        }
      }, {
        key: "onOpenMenu",
        value: function onOpenMenu(menu) {
          menu.openMenu;
        }
      }, {
        key: "drop",
        value: function drop(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }
        /**
         * Handles the movement of options from list to list
         */

      }, {
        key: "dropcustom",
        value: function dropcustom(element, i, currentContainer) {
          var index1 = this.arrayOptionList[0].values.indexOf(element);
          var index2 = this.arrayOptionList[1].values.indexOf(element);
          var index3 = this.arrayOptionList[2].values.indexOf(element);

          if (index1 != -1) {
            this.arrayOptionList[0].values.splice(index1, 1);
          } else if (index2 != -1) {
            this.arrayOptionList[1].values.splice(index2, 1);
          } else if (index3 != -1) {
            this.arrayOptionList[2].values.splice(index3, 1);
          }

          currentContainer.values.push(element);
          this.moveMessage = "Moved " + element + " to " + currentContainer.name;
          this.handleFocus(element, i);
        }
        /**
         * Because the screen reader functionality is new, it is uncertain the best means of handling focus.
         * this implementation of handle focus attempts to find the first different item in the available list
         * and moves focus to that element. this enables faster usage of the input to answer the question but
         * can be slightly disorienting.
         * @param elemId - Dom id of element
         * @param i - index of element
         */

      }, {
        key: "handleFocus",
        value: function handleFocus(elemId, i) {
          var parentList = document.getElementById(i);
          var passedFocus = false; //Focus first item from the available list that is not the current button option

          this.arrayOptionList.forEach(function (optionList) {
            var tempListElement = document.getElementById(optionList.name);
            Array.from(tempListElement.children).forEach(function (element) {
              if (element.id !== elemId && !passedFocus) {
                var nextElem = document.getElementById(element.id);
                passedFocus = true;
                nextElem.focus();
              }
            });
          });
        }
      }]);

      return MatchComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchComponent.prototype, "elements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchComponent.prototype, "attributes", void 0);
    MatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-match",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./match.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./match.component.scss */
      "./src/app/match/match.component.scss"))["default"]]
    })
    /**
     * MatchComponent takes a CDKdroplist component and inserts Mat menus into the component.
     * The menus are based on the structure in the the arrayOptionList.
     * Which is the dragBay/List and then the options contained in each List.
     * By default all the options are placed in the options list to be moved into the "answer" bays/lists.
     *
     * Accessibility -- By using the menus inserted into the Dom that display on a click event it allows
     *  screen reader users to place options into the approriate location without needing to know the visual layout
     *  a key here is iterating thorugh and using angular bindings to create dynamic labels so a user knows
     *  the number of options in each menu. An aria live region is used to notify users of placements.
     *
     * Improvements -- There is a slight delay in the announcement of options placement to the user despite the live region being set ot assertive
     *    Implement as form and functionality to check the list for correctness via submit functions.
     */
    ], MatchComponent);
    /***/
  },

  /***/
  "./src/app/table/table.component.scss":
  /*!********************************************!*\
    !*** ./src/app/table/table.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTableTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.noDisplay {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvQzpcXFByb2plY3RzXFxIdW50ZXJfY29ycC1BY2Nlc3NpYmlsaXR5LVRlc3RiZWQvc3JjXFxhcHBcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubm9EaXNwbGF5IHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9EaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/table/table.component.ts":
  /*!******************************************!*\
    !*** ./src/app/table/table.component.ts ***!
    \******************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @title Table with selection
     */


    var TableComponent = /*#__PURE__*/function () {
      function TableComponent(formBuilder) {
        _classCallCheck(this, TableComponent);

        this.formBuilder = formBuilder;
        this.questionData = [{
          name: 'Larry',
          isBald: false,
          isNotSmart: false
        }, {
          name: 'Moe',
          isBald: false,
          isNotSmart: false
        }, {
          name: 'Curly',
          isBald: false,
          isNotSmart: false
        }];
        this.form = this.formBuilder.group({
          isBald: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          isDumb: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.addCheckboxes();
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCheckboxes",
        value: function addCheckboxes() {
          var _this9 = this;

          this.questionData.forEach(function () {
            return _this9.isDumbFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
          });
        }
      }, {
        key: "click",
        value: function click() {}
      }, {
        key: "radioChange",
        value: function radioChange(data) {}
      }, {
        key: "submit",
        value: function submit() {
          var _this10 = this;

          var selectedOptionIds = this.form.value.options.map(function (checked, i) {
            return checked ? _this10.questionData[i].name : null;
          }).filter(function (v) {
            return v !== null;
          });
        }
      }, {
        key: "isDumbFormArray",
        get: function get() {
          return this.form.controls.isDumb;
        }
      }]);

      return TableComponent;
    }();

    TableComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table.component.scss */
      "./src/app/table/table.component.scss"))["default"]]
    })], TableComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\Hunter_corp-Accessibility-Testbed\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map