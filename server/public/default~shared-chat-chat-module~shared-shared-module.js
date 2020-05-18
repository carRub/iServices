(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shared-chat-chat-module~shared-shared-module"],{

/***/ "./src/app/shared/chat/chat-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/chat/chat-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ "./src/app/shared/chat/chat.component.ts");





const routes = [{ path: 'conv/:pid/:uid', component: _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] }];
class ChatRoutingModule {
}
ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/chat/chat.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/chat/chat.component.ts ***!
  \***********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "./src/app/shared/chat/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function ChatComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1.message);
} }
function ChatComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1.message);
} }
function ChatComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_7_div_1_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_7_div_2_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r1.sender != ctx_r0.myId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r1.sender == ctx_r0.myId);
} }
class ChatComponent {
    constructor(chatService, route) {
        this.chatService = chatService;
        this.route = route;
        this.messagesHistory = [];
        this.msg = '';
        this.messagesHistory = [
            { sender: '5ea75bf3f3e19c29d2c01218', message: 'Hola' },
            { sender: '5ebce58c628b803f1bf7a52f', message: 'Qué tal' },
            { sender: '5ea75bf3f3e19c29d2c01218', message: 'Quisiera más informes, por favor' },
            { sender: '5ebce58c628b803f1bf7a52f', message: 'Claro, el precio por hora es de $100' },
            { sender: '5ea75bf3f3e19c29d2c01218', message: 'Gracias' },
            { sender: '5ebce58c628b803f1bf7a52f', message: 'Por nada' },
        ];
    }
    ngOnDestroy() {
        this.messagesSubscription.unsubscribe();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.professionalId = params.pid;
            this.userId = params.uid;
        });
        this.myId = this.userId;
        this.receiverId = this.professionalId;
        // get messages from the backend and store them in messagesHistory;
        this.chatService.startChat('connecting');
        // this.chatSubscription = this.chatService.connectedToChat()
        // .subscribe((msg: string) => {
        //   console.log(msg);
        //   if (this.myId === 1) {
        //     this.myId = 2;
        //   } else {
        //     this.myId = 1;
        //   }
        // });
        // this.myId ++;
        // console.log(this.myId);
        this.messagesSubscription = this.chatService.getMessages()
            .subscribe((msg) => {
            // save messages somewhere
            console.log("message ", msg);
            // const message = {message: msg, sender};
            this.messagesHistory.push(msg);
            console.log(msg);
        });
    }
    sendMessage() {
        this.chatService.sendMessage(this.msg, this.myId);
        this.msg = '';
    }
    simulateReceiver() {
        const tmp = this.myId;
        this.myId = this.professionalId;
        this.professionalId = tmp;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 14, vars: 2, consts: [[1, "container"], [1, "text-center"], [1, "messaging"], [1, "inbox_msg"], [1, "mesgs"], [1, "msg_history"], [4, "ngFor", "ngForOf"], [1, "type_msg"], [1, "input_msg_write"], ["type", "text", "placeholder", "Type a message", 1, "write_msg", 3, "ngModel", "ngModelChange", "keydown.enter"], ["type", "button", 1, "msg_send_btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "incoming_msg", 4, "ngIf"], ["class", "outgoing_msg", 4, "ngIf"], [1, "incoming_msg"], [1, "incoming_msg_img"], ["src", "https://ptetutorials.com/images/user-profile.png", "alt", "receiver"], [1, "received_msg"], [1, "received_withd_msg"], [1, "outgoing_msg"], [1, "sent_msg"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_div_7_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_10_listener($event) { return ctx.msg = $event; })("keydown.enter", function ChatComponent_Template_input_keydown_enter_10_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_11_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_13_listener() { return ctx.simulateReceiver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messagesHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1170px;\n  margin: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.inbox_people[_ngcontent-%COMP%] {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4;\n}\n\n.inbox_msg[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden;\n  background-color: white;\n}\n\n.top_spac[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n\n.recent_heading[_ngcontent-%COMP%] {\n  float: left;\n  width: 40%;\n}\n\n.srch_bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n}\n\n.headind_srch[_ngcontent-%COMP%] {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.recent_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #8448FF;\n  font-size: 21px;\n  margin: auto;\n}\n\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none;\n}\n\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px;\n}\n\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  margin: 0 0 0 -27px;\n}\n\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0;\n}\n\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  float: right;\n}\n\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #989898;\n  margin: auto;\n}\n\n.chat_img[_ngcontent-%COMP%] {\n  float: left;\n  width: 11%;\n}\n\n.chat_ib[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%;\n}\n\n.chat_people[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clear: both;\n}\n\n.chat_list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px;\n}\n\n.inbox_chat[_ngcontent-%COMP%] {\n  height: 550px;\n  overflow-y: scroll;\n}\n\n.active_chat[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n\n.incoming_msg_img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6%;\n}\n\n.received_msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n}\n\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.time_date[_ngcontent-%COMP%] {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n\n.received_withd_msg[_ngcontent-%COMP%] {\n  width: 57%;\n}\n\n.mesgs[_ngcontent-%COMP%] {\n  padding: 30px 15px 0 25px;\n  width: 99%;\n}\n\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #8448FF none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.outgoing_msg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 26px 0 26px;\n}\n\n.sent_msg[_ngcontent-%COMP%] {\n  float: right;\n  width: 46%;\n}\n\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  border-top: 1px solid #c4c4c4;\n  position: relative;\n  width: 100%;\n}\n\n.msg_send_btn[_ngcontent-%COMP%] {\n  background: #8448FF;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 15px;\n  height: 35px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 35px;\n}\n\n.msg_send_btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #8448FF;\n  border: solid;\n  border-width: 2px;\n  border-color: #8448FF;\n}\n\n.messaging[_ngcontent-%COMP%] {\n  padding: 0 0 50px 0;\n}\n\n.msg_history[_ngcontent-%COMP%] {\n  height: 516px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3MucnViaW8vRG9jdW1lbnRzL0lURVNPLzdtby9QQUUvaVNlcnZpY2VzL3NyYy9hcHAvc2hhcmVkL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGlCQUFBO0VBQWtCLFlBQUE7QUNHN0I7O0FERkE7RUFBSyxlQUFBO0FDTUw7O0FETEE7RUFDRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFBWSwrQkFBQTtBQ1NkOztBRFBBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1VGOztBRFJBO0VBQVcsZ0JBQUE7QUNZWDs7QURUQTtFQUFpQixXQUFBO0VBQWEsVUFBQTtBQ2M5Qjs7QURiQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDZ0JGOztBRGRBO0VBQWUsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIsZ0NBQUE7QUNvQjdEOztBRGxCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ3FCRjs7QURuQkE7RUFBaUIseUJBQUE7RUFBMEIsdUJBQUE7RUFBd0IsVUFBQTtFQUFXLHNCQUFBO0VBQXVCLGdCQUFBO0FDMkJyRzs7QUQxQkE7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDNkJGOztBRDNCQTtFQUErQixtQkFBQTtBQytCL0I7O0FEN0JBO0VBQWEsZUFBQTtFQUFnQixjQUFBO0VBQWUsaUJBQUE7QUNtQzVDOztBRGxDQTtFQUFrQixlQUFBO0VBQWdCLFlBQUE7QUN1Q2xDOztBRHRDQTtFQUFZLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLFlBQUE7QUM0QzNDOztBRDNDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDOENGOztBRDVDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUMrQ0Y7O0FENUNBO0VBQWMsZ0JBQUE7RUFBaUIsV0FBQTtBQ2lEL0I7O0FEaERBO0VBQ0UsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUNtREY7O0FEakRBO0VBQWMsYUFBQTtFQUFlLGtCQUFBO0FDc0Q3Qjs7QURwREE7RUFBYyxtQkFBQTtBQ3dEZDs7QUR0REE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7QUN5REY7O0FEdkRBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQzBERjs7QUR4REM7RUFDQywwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDMkRGOztBRHpEQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUM0REY7O0FEMURBO0VBQXNCLFVBQUE7QUM4RHRCOztBRDdEQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtBQ2dFRjs7QUQ3REM7RUFDQywwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFBVyxXQUFBO0VBQ1gsMEJBQUE7RUFDQSxXQUFBO0FDaUVGOztBRC9EQTtFQUFlLGdCQUFBO0VBQWlCLG1CQUFBO0FDb0VoQzs7QURuRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ3NFRjs7QURwRUE7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN1RUY7O0FEcEVBO0VBQVcsNkJBQUE7RUFBOEIsa0JBQUE7RUFBb0IsV0FBQTtBQzBFN0Q7O0FEekVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDNEVGOztBRHpFQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDNEVKOztBRHpFQTtFQUFhLG1CQUFBO0FDNkViOztBRDVFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQytFRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye21heC13aWR0aDoxMTcwcHg7IG1hcmdpbjphdXRvO31cbmltZ3sgbWF4LXdpZHRoOjEwMCU7fVxuLmluYm94X3Blb3BsZSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MCU7IGJvcmRlci1yaWdodDoxcHggc29saWQgI2M0YzRjNDtcbn1cbi5pbmJveF9tc2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udG9wX3NwYWN7IG1hcmdpbjogMjBweCAwIDA7fVxuXG5cbi5yZWNlbnRfaGVhZGluZyB7ZmxvYXQ6IGxlZnQ7IHdpZHRoOjQwJTt9XG4uc3JjaF9iYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNjAlOyBcbn1cbi5oZWFkaW5kX3NyY2h7IHBhZGRpbmc6MTBweCAyOXB4IDEwcHggMjBweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzRjNGM0O31cblxuLnJlY2VudF9oZWFkaW5nIGg0IHtcbiAgY29sb3I6ICM4NDQ4RkY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNyY2hfYmFyIGlucHV0eyBib3JkZXI6MXB4IHNvbGlkICNjZGNkY2Q7IGJvcmRlci13aWR0aDowIDAgMXB4IDA7IHdpZHRoOjgwJTsgcGFkZGluZzoycHggMCA0cHggNnB4OyBiYWNrZ3JvdW5kOm5vbmU7fVxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHsgbWFyZ2luOiAwIDAgMCAtMjdweDt9XG5cbi5jaGF0X2liIGg1eyBmb250LXNpemU6MTVweDsgY29sb3I6IzQ2NDY0NjsgbWFyZ2luOjAgMCA4cHggMDt9XG4uY2hhdF9pYiBoNSBzcGFueyBmb250LXNpemU6MTNweDsgZmxvYXQ6cmlnaHQ7fVxuLmNoYXRfaWIgcHsgZm9udC1zaXplOjE0cHg7IGNvbG9yOiM5ODk4OTg7IG1hcmdpbjphdXRvfVxuLmNoYXRfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMSU7XG59XG4uY2hhdF9pYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xuICB3aWR0aDogODglO1xufVxuXG4uY2hhdF9wZW9wbGV7IG92ZXJmbG93OmhpZGRlbjsgY2xlYXI6Ym90aDt9XG4uY2hhdF9saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XG59XG4uaW5ib3hfY2hhdCB7IGhlaWdodDogNTUwcHg7IG92ZXJmbG93LXk6IHNjcm9sbDt9XG5cbi5hY3RpdmVfY2hhdHsgYmFja2dyb3VuZDojZWJlYmViO31cblxuLmluY29taW5nX21zZ19pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2JTtcbn1cbi5yZWNlaXZlZF9tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MiU7XG4gfVxuIC5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzY0NjQ2NDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi50aW1lX2RhdGUge1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA4cHggMCAwO1xufVxuLnJlY2VpdmVkX3dpdGhkX21zZyB7IHdpZHRoOiA1NyU7fVxuLm1lc2dzIHtcbiAgcGFkZGluZzogMzBweCAxNXB4IDAgMjVweDtcbiAgd2lkdGg6IDk5JTtcbn1cblxuIC5zZW50X21zZyBwIHtcbiAgYmFja2dyb3VuZDogIzg0NDhGRiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwOyBjb2xvcjojZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6MTAwJTtcbn1cbi5vdXRnb2luZ19tc2d7IG92ZXJmbG93OmhpZGRlbjsgbWFyZ2luOjI2cHggMCAyNnB4O31cbi5zZW50X21zZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ2JTtcbn1cbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9tc2cge2JvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O3Bvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDEwMCU7fVxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICM4NDQ4RkY7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTFweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5tc2dfc2VuZF9idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjODQ0OEZGO1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjODQ0OEZGO1xufVxuXG4ubWVzc2FnaW5nIHsgcGFkZGluZzogMCAwIDUwcHggMDt9XG4ubXNnX2hpc3Rvcnkge1xuICBoZWlnaHQ6IDUxNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pbmJveF9wZW9wbGUge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4uaW5ib3hfbXNnIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udG9wX3NwYWMge1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuXG4ucmVjZW50X2hlYWRpbmcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnNyY2hfYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmhlYWRpbmRfc3JjaCB7XG4gIHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4ucmVjZW50X2hlYWRpbmcgaDQge1xuICBjb2xvcjogIzg0NDhGRjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zcmNoX2JhciBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAycHggMCA0cHggNnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIG1hcmdpbjogMCAwIDAgLTI3cHg7XG59XG5cbi5jaGF0X2liIGg1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbi5jaGF0X2liIGg1IHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNoYXRfaWIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNoYXRfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMSU7XG59XG5cbi5jaGF0X2liIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDE1cHg7XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5jaGF0X3Blb3BsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2hhdF9saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XG59XG5cbi5pbmJveF9jaGF0IHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYWN0aXZlX2NoYXQge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xufVxuXG4uaW5jb21pbmdfbXNnX2ltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYlO1xufVxuXG4ucmVjZWl2ZWRfbXNnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogOTIlO1xufVxuXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aW1lX2RhdGUge1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA4cHggMCAwO1xufVxuXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHtcbiAgd2lkdGg6IDU3JTtcbn1cblxuLm1lc2dzIHtcbiAgcGFkZGluZzogMzBweCAxNXB4IDAgMjVweDtcbiAgd2lkdGg6IDk5JTtcbn1cblxuLnNlbnRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjODQ0OEZGIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdXRnb2luZ19tc2cge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDI2cHggMCAyNnB4O1xufVxuXG4uc2VudF9tc2cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NiU7XG59XG5cbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9tc2cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICM4NDQ4RkY7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTFweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5tc2dfc2VuZF9idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM4NDQ4RkY7XG4gIGJvcmRlcjogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICM4NDQ4RkY7XG59XG5cbi5tZXNzYWdpbmcge1xuICBwYWRkaW5nOiAwIDAgNTBweCAwO1xufVxuXG4ubXNnX2hpc3Rvcnkge1xuICBoZWlnaHQ6IDUxNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/chat/chat.module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/chat/chat.module.ts ***!
  \********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/shared/chat/chat-routing.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ "./src/app/shared/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/chat/chat.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/chat/chat.service.ts ***!
  \*********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");




class ChatService {
    constructor(socket) {
        this.socket = socket;
        this.messagesHistory = [];
        this.messagesHistory = [
            { sender: 2, receiver: 1, message: 'Hola' },
            { sender: 1, receiver: 2, message: 'Qué tal' },
            { sender: 2, receiver: 1, message: 'Quisiera más informes, por favor' },
            { sender: 1, receiver: 2, message: 'Claro, el precio por hora es de $100' },
            { sender: 2, receiver: 1, message: 'Gracias' },
            { sender: 1, receiver: 2, message: 'Por nada' },
        ];
    }
    // connecting to the chat
    startChat(message) {
        this.socket.emit('startChat', message);
    }
    // confirmation
    connectedToChat() {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            this.socket.on('startChat', (message) => {
                observer.next(message);
            });
        });
    }
    // senging a message
    sendMessage(message, sender) {
        this.socket.emit('send', message, sender);
    }
    // getting a message
    getMessages() {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            this.socket.on('refresh', (message) => {
                observer.next(message);
            });
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~shared-chat-chat-module~shared-shared-module.js.map