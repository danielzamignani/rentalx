"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var DayjsDateProvider_1 = require("./DateProvider/implementatios/DayjsDateProvider");
tsyringe_1.container.registerSingleton("DayJsDateProvider", DayjsDateProvider_1.DayjsDateProvider);
