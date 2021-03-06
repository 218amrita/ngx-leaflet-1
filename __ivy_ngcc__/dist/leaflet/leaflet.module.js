import { NgModule } from '@angular/core';
import { LeafletDirective } from './core/leaflet.directive';
import { LeafletLayerDirective } from './layers/leaflet-layer.directive';
import { LeafletLayersDirective } from './layers/leaflet-layers.directive';
import { LeafletLayersControlDirective } from './layers/control/leaflet-control-layers.directive';
import { LeafletBaseLayersDirective } from './layers/base/leaflet-baselayers.directive';
import * as ɵngcc0 from '@angular/core';
var LeafletModule = /** @class */ (function () {
    function LeafletModule() {
    }
LeafletModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LeafletModule });
LeafletModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LeafletModule_Factory(t) { return new (t || LeafletModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LeafletModule, { declarations: function () { return [LeafletDirective,
        LeafletLayerDirective,
        LeafletLayersDirective,
        LeafletLayersControlDirective,
        LeafletBaseLayersDirective]; }, exports: function () { return [LeafletDirective,
        LeafletLayerDirective,
        LeafletLayersDirective,
        LeafletLayersControlDirective,
        LeafletBaseLayersDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LeafletModule, [{
        type: NgModule,
        args: [{
                exports: [
                    LeafletDirective,
                    LeafletLayerDirective,
                    LeafletLayersDirective,
                    LeafletLayersControlDirective,
                    LeafletBaseLayersDirective
                ],
                declarations: [
                    LeafletDirective,
                    LeafletLayerDirective,
                    LeafletLayersDirective,
                    LeafletLayersControlDirective,
                    LeafletBaseLayersDirective
                ]
            }]
    }], function () { return []; }, null); })();
    return LeafletModule;
}());
export { LeafletModule };

//# sourceMappingURL=leaflet.module.js.map