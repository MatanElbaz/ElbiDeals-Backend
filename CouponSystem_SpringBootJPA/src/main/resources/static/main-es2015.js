(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-companies/admin-companies.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-companies/admin-companies.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <input required type=\"number\" id=\"companyId\" placeholder=\"Company ID\" [(ngModel)]=\"comapnyId\" name=\"companyId\">\n<button (click)=\"findAdminCompanyById(couponId)\">getCompany</button> -->\n\n\n<div>\n   \n    <table id=\"myTable\" *ngIf=\"companies\" style=\" border: 1px;\">\n\n        <caption>\n            <h3>Companies</h3>\n            <input  type=\"text\" id=\"myInput\" (input)=\"applyFilter($event)\" placeholder=\"Search Company\">\n            <input  type=\"text\" id=\"myInput\" (input)=\"applyFilterEmail($event)\" placeholder=\"Search by Email\">\n        </caption>\n        <thead>\n            <tr class=\"header\">\n                <th>Name</th>\n                <th>Email</th>\n                <th>Password</th>\n                <th>Delete</th>\n                <th>Edit</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let c of findedCompanies\" >\n                <td routerLink=\"/company-details/{{c.id}}\">{{c.name}}</td>\n                <td routerLink=\"/company-details/{{c.id}}\">{{c.email}}</td>\n                <td routerLink=\"/company-details/{{c.id}}\">{{c.password}}</td>\n                <td>\n                    <button  type=\"button\" (click)=\"deleteCompany(c.id)\">Delete</button>\n                </td>\n                <td>\n                    <button  type=\"button\" routerLink=\"/admin/edit-company/{{c.id}}\">Edit</button>\n                </td>\n                    \n                \n            </tr>\n            \n            \n        </tbody>\n    </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-coupons/admin-coupons.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-coupons/admin-coupons.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <input required type=\"number\" id=\"couponId\" placeholder=\"Coupon ID\" [(ngModel)]=\"couponId\" name=\"couponId\">\n<button (click)=\"findAdminCouponById(couponId)\">getCoupon</button> -->\n\n<div>\n    <table id=\"myTable\" *ngIf=\"coupons\" style=\" border: 1px;\">\n\n        <caption>\n            <h3>Coupons</h3>\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilter($event)\" placeholder=\"Search Coupon(Title)\">\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilterComapny($event)\" placeholder=\"Search By Company\">\n        </caption>\n        <thead>\n            <tr class=\"header\">\n                <th>Company</th>\n                <th>Title</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Category</th>\n                <th>Amount</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Image</th>\n                <th>Delete</th>\n                <th>Edit</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let c of findedCoupons\" >\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.companyName}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.title}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.startDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.endDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.category}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.amount}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.description}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.price}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">\n                    <!-- <a routerLink=\"/coupon-details/{{p.id}}\"> <app-thumbnail imageSource=\"assets/imagess/coupons/{{p.id}}.jpg\"></app-thumbnail></a> -->\n                </td>\n                <td>\n                    <button  type=\"button\" (click)=\"deleteCoupon(c.id)\">Delete</button>\n                </td>\n                <td>\n                    <button  type=\"button\" routerLink=\"/admin/edit-coupon/{{c.id}}\">Edit</button>\n                </td>\n                    \n                \n            </tr>\n            \n            \n        </tbody>\n    </table>\n</div>\n<div>\n    <app-admin-companies></app-admin-companies>\n</div>\n<div>\n    <app-admin-customers></app-admin-customers>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-customers/admin-customers.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-customers/admin-customers.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <input required type=\"number\" id=\"companyId\" placeholder=\"Company ID\" [(ngModel)]=\"comapnyId\" name=\"companyId\">\n<button (click)=\"findAdminCompanyById(couponId)\">getCompany</button> -->\n\n<div>\n    <table id=\"myTable\" *ngIf=\"customers\" style=\" border: 1px;\">\n\n        <caption>\n            <h3>Customers</h3>\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilter($event)\" placeholder=\"Search Customer\">\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilterLastName($event)\" placeholder=\"Search by Last Name\">\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilterEmail($event)\" placeholder=\"Search by Email\">\n        </caption>\n        <thead>\n            <tr class=\"header\">\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Email</th>\n                <th>Password</th>\n                <th>Delete</th>\n                <th>Edit</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let c of findedCustomers\" >\n                <td routerLink=\"/customer-details/{{c.id}}\">{{c.firstName}}</td>\n                <td routerLink=\"/customer-details/{{c.id}}\">{{c.lastName}}</td>\n                <td routerLink=\"/customer-details/{{c.id}}\">{{c.email}}</td>\n                <td routerLink=\"/customer-details/{{c.id}}\">{{c.password}}</td>\n                <td>\n                    <button  type=\"button\" (click)=\"deleteCustomer(c.id)\">Delete</button>\n                </td>\n                <td>\n                    <button  type=\"button\" routerLink=\"/admin/edit-customer/{{c.id}}\">Edit</button>\n                </td>\n                    \n                \n            </tr>\n            \n            \n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-menu/admin-menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-menu/admin-menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section>\n\n<aside>\n  <ul>\n  <div class=\"sidenav\">\n    <li><a routerLink=\"/admin/update\" routerLinkActive=\"active-link\">Edit My Profile</a></li>\n    <li><a routerLink=\"/admin/add-coupon\" routerLinkActive=\"active-link\">Add Coupon</a></li>\n    <li><a routerLink=\"/admin/add-company\" routerLinkActive=\"active-link\">Add Company</a></li>\n    <li><a routerLink=\"/admin/add-customer\" routerLinkActive=\"active-link\">Add Customer</a></li>\n  </div>\n  \n</ul>\n</aside>\n\n\n\n<main>\n  <app-admin-coupons></app-admin-coupons>\n</main>\n\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/company-add/company-add.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/company-add/company-add.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n   <div class=\"container\">\n     <h1>Add new Company</h1>\n     <p>Please fill in this form to create new company.</p>\n     <hr class=\"sep-2\" />\n \n     <label for=\"email\"><b>Company Name</b></label> \n     <br>\n      <input ngModel name=\"companyName\" type=\"text\" name=\"companyName\" [formControl]= \"companyName\"\n      [ngClass]=\"{'invalid':companyName.invalid && companyName.touched}\"  placeholder=\"Company name..\" >\n <br>\n <ul class=\"error\" *ngIf=\"companyName.dirty && companyName.invalid\">\n  <li *ngIf=\"companyName.errors?.required && companyName.touched\">Name is required</li>\n  <li *ngIf=\"companyName.errors?.minlength && companyName.touched\">Name too short. at least {{companyName.errors.minlength.requiredLength}} characters</li>\n  <li *ngIf=\"companyName.errors?.maxlength && companyName.dirty\">Name too long. max {{companyName.errors.maxlength.requiredLength}} characters</li>\n  <li *ngIf=\"companyName.dirty && companyName.errors?.pattern\">Name should start with a capital letter</li>\n</ul>\n<br>\n     <label for=\"psw\"><b>Company Email</b></label> <br>\n     <input type=\"text\" name=\"companyEmail\" [formControl]= \"companyEmail\"\n     [ngClass]=\"{'invalid':companyEmail.invalid && companyEmail.touched}\" placeholder=\"Company email..\" >\n <br>\n <ul class=\"error\" *ngIf=\"companyEmail.dirty && companyEmail.invalid\">\n  <li *ngIf=\"companyEmail.errors?.required && companyEmail.touched\">Email is required</li>\n  <li *ngIf=\"companyEmail.dirty && companyEmail.errors?.pattern\">Invalid Email</li>\n</ul>\n<br>\n\n     <label for=\"psw-repeat\"><b>Company Password</b></label> <br>\n     <input type=\"password\" name=\"companyPassword\" [formControl]= \"companyPassword\"\n     [ngClass]=\"{'invalid':companyPassword.invalid && companyPassword.touched}\" placeholder=\"Company password..\" >\n    <br>\n    <ul class=\"error\" *ngIf=\"companyPassword.dirty && companyPassword.invalid\">\n      \n      <li *ngIf=\"companyPassword.errors?.minlength && companyPassword.touched\">Password too short. at least {{companyPassword.errors.minlength.requiredLength}} characters</li>\n      <li *ngIf=\"companyPassword.errors?.maxlength && companyPassword.dirty\">Password too long. max {{companyPassword.errors.maxlength.requiredLength}} characters</li>\n      <li *ngIf=\"companyPassword.errors?.required && companyPassword.touched\">Password is required</li>\n      <li *ngIf=\"companyPassword.dirty && companyPassword.errors?.pattern\">Invalid password</li>\n      \n    </ul>\n    <br>\n     \n \n     \n \n     <div class=\"clearfix\">\n       <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n       <button class=\"signupbtn\" [disabled]=\"!registrationForm.valid\" (click)=\"addCompany()\">Add Comapny</button>\n       \n     </div>\n   </div>\n </form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <section>\n\n\n<form>\n   Add new Company\n   <br>\n    <p>Company Name: <input type=\"text\" name=\"companyName\" [formControl]= \"companyName\"  placeholder=\"Company name..\" required></p>\n    <br>\n    <p>Company Email: <input type=\"text\" name=\"companyEmail\" [formControl]= \"companyEmail\" placeholder=\"Company email..\" required></p>\n    <p class=\"error-message\" *ngIf=\"companyEmail.get('email')\">{{validation.message}}</p>\n    <br>\n    <p>Company Password: <input type=\"text\" name=\"companyPassword\" [formControl]= \"companyPassword\" placeholder=\"Company password..\" required></p>\n    <br>\n    \n\n<button (click)=\"addCompany()\">Add Comapny</button>\n</form>\n<br>\n<a routerLink=\"/home\">Back to home</a>\n</section> -->\n\n\n    \n    \n    \n      \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/company-update/company-update.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/company-update/company-update.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf= \"!company\">\n  <h2>Company Not Found!</h2>\n  <app-not-found></app-not-found>\n</div>\n\n<div *ngIf= \"company\">\n<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Edit Company</h1>\n      <p>Please fill in this form to update company.</p>\n      <hr class=\"sep-2\" />\n  \n      <label for=\"email\"><b>Company Name</b></label> <br>\n      <input type=\"text\" name=\"companyName\" [formControl]=\"companyName\" placeholder=\"Name..\" value=\"{{company.name}}\">\n  <br>\n      <label for=\"psw\"><b>Company Email</b></label> <br>\n      <input type=\"text\" name=\"companyEmail\" [formControl]=\"companyEmail\" placeholder=\"Email..\" value=\"{{company.email}}\" >\n  <br>\n      <label for=\"psw-repeat\"><b>Company Password</b></label> <br>\n      <input type=\"text\" name=\"companyPassword\" [formControl]=\"companyPassword\" placeholder=\"Password..\" value=\"{{company.password}}\" >  \n      \n  \n      \n  \n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" (click)=\"updateCompany()\">Update Comapny</button>\n        \n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/coupon-add/coupon-add.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/coupon-add/coupon-add.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Add new Coupon</h1>\n      <p>Please fill in this form to add a new coupon.</p>\n      <hr class=\"sep-2\" />\n  \n      <label for=\"email\"><b>Company ID</b></label>\n  <br>\n      <input type=\"number\" name=\"companyId\" [formControl]= \"companyId\"\n      [ngClass]=\"{'invalid':companyId.invalid && companyId.touched}\" placeholder=\"Company Id..\"  >\n  <br>\n  <ul class=\"error\" *ngIf=\"companyId.dirty && companyId.invalid\">\n    <li *ngIf=\"companyId.errors?.min && companyId.touched\">Invalid ID</li>\n    <li *ngIf=\"companyId.errors?.required && companyId.touched\">ID is required</li>\n  </ul>\n  <br>\n      <label for=\"psw\"><b>Title</b></label> \n  <br>\n      <input type=\"text\" name=\"title\" [formControl]= \"coupontitle\"\n      [ngClass]=\"{'invalid':coupontitle.invalid && coupontitle.touched}\" placeholder=\"Title..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"coupontitle.dirty && coupontitle.invalid\">\n      \n    <li *ngIf=\"coupontitle.errors?.minlength && coupontitle.touched\">Title too short. at least {{coupontitle.errors.minlength.requiredLength}} characters</li>\n    <li *ngIf=\"coupontitle.errors?.maxlength && coupontitle.dirty\">Title too long. max {{coupontitle.errors.maxlength.requiredLength}} characters</li>\n    <li *ngIf=\"coupontitle.errors?.required && coupontitle.touched\">Title is required</li>\n    <li *ngIf=\"coupontitle.dirty && coupontitle.errors?.pattern\">Invalid title, start with a capital letter</li>\n    \n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Start Date</b></label> \n  <br>\n      <input type=\"date\" name=\"startDate\" [formControl]= \"couponstartDate\" \n      [ngClass]=\"{'invalid':couponstartDate.invalid && couponstartDate.touched}\" placeholder=\"Start Date..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponstartDate.dirty && couponstartDate.invalid\">\n      \n    <li *ngIf=\"couponstartDate.errors?.required && couponstartDate.touched\">Start date is required</li>\n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>End Date</b></label>\n  <br>\n      <input type=\"date\" name=\"endDate\" [formControl]= \"couponendDate\" \n      [ngClass]=\"{'invalid':couponendDate.invalid && couponendDate.touched}\"placeholder=\"End Date..\" >\n  <br> \n  <ul class=\"error\" *ngIf=\"couponendDate.dirty && couponendDate.invalid\">\n      \n    <li *ngIf=\"couponendDate.errors?.required && couponendDate.touched\">End date is required</li>\n  </ul>\n  <br> \n      <label for=\"psw-repeat\"><b>Category</b></label>\n  <br>\n      <input type=\"number\" name=\"category\" [formControl]= \"couponcategory\"\n      [ngClass]=\"{'invalid':couponcategory.invalid && couponcategory.touched}\" placeholder=\"Category..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponcategory.dirty && couponcategory.invalid\">\n    <li *ngIf=\"couponcategory.errors?.min && couponcategory.touched\">Invalid category</li>\n    <li *ngIf=\"couponcategory.errors?.required && couponcategory.touched\">Category is required</li>\n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Amount</b></label>\n  <br>\n      <input type=\"number\" name=\"amount\" [formControl]= \"couponamount\" \n      [ngClass]=\"{'invalid':couponamount.invalid && couponamount.touched}\"placeholder=\"Amount..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponamount.dirty && couponamount.invalid\">\n    <li *ngIf=\"couponamount.errors?.min && couponamount.touched\">Invalid amount</li>\n    <li *ngIf=\"couponamount.errors?.required && couponamount.touched\">Amount is required</li>\n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Description</b></label>\n  <br>\n      <input type=\"text\" name=\"description\" [formControl]= \"coupondescription\" \n      [ngClass]=\"{'invalid':coupondescription.invalid && coupondescription.touched}\"placeholder=\"Description..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"coupondescription.dirty && coupondescription.invalid\">\n      \n    <li *ngIf=\"coupondescription.errors?.minlength && coupondescription.touched\">Description too short. at least {{coupondescription.errors.minlength.requiredLength}} characters</li>\n    <li *ngIf=\"coupondescription.errors?.maxlength && coupondescription.dirty\">Description too long. max {{coupondescription.errors.maxlength.requiredLength}} characters</li>\n    <li *ngIf=\"coupondescription.errors?.required && coupondescription.touched\">Description is required</li>\n    \n    \n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Price</b></label>\n  <br>\n      <input type=\"number\" name=\"price\" [formControl]= \"couponprice\" \n      [ngClass]=\"{'invalid':couponprice.invalid && couponprice.touched}\"placeholder=\"price..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponprice.dirty && couponprice.invalid\">\n    <li *ngIf=\"couponprice.errors?.min && couponprice.touched\">Invalid price(min 10$)</li>\n    <li *ngIf=\"couponprice.errors?.required && couponprice.touched\">Price is required</li>\n  </ul>\n  <br>\n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" [disabled]=\"!registrationForm.valid\" (click)=\"addCoupon()\">Add Coupon</button>\n        \n      </div>\n    </div>\n  </form>\n \n \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/coupon-update/coupon-update.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/coupon-update/coupon-update.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf= \"!coupon\">\n    <h2>Coupon Not Found!</h2>\n    <app-not-found></app-not-found>\n</div>\n\n<div *ngIf=\"coupon\">\n<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Update Coupon</h1>\n      <p>Please fill in this form to update coupon.</p>\n      <hr class=\"sep-2\" />\n  \n      <label for=\"psw\"><b>Title</b></label>\n      <br>\n      <input type=\"text\" name=\"coupontitle\" [formControl]=\"coupontitle\" placeholder=\"Title..\" value=\"{{coupon.title}}\">\n      <br> \n      <label for=\"psw-repeat\"><b>Start Date</b></label>\n      <br>\n      <input type=\"date\" name=\"couponstartDate\" [formControl]=\"couponstartDate\" placeholder=\"Start Date..\" value=\"{{coupon.startDate}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>End Date</b></label>\n      <br>\n      <input type=\"date\" name=\"couponendDate\" [formControl]=\"couponendDate\" placeholder=\"End Date..\" value=\"{{coupon.endDate}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>Category</b></label>\n      <br>\n      <input type=\"number\" name=\"couponcategory\" [formControl]=\"couponcategory\" placeholder=\"Category..\" value=\"{{coupon.category}}\">\n      <br>\n      <label for=\"psw-repeat\"><b>Amount</b></label>\n      <br>\n      <input type=\"number\" name=\"couponamount\" [formControl]=\"couponamount\" placeholder=\"Amount..\" value=\"{{coupon.amount}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>Description</b></label>\n      <br>\n      <input type=\"text\" name=\"coupondescription\" [formControl]=\"coupondescription\" placeholder=\"Description..\" value=\"{{coupon.description}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>Price</b></label>\n      <br>\n      <input type=\"number\" name=\"couponprice\" [formControl]=\"couponprice\" placeholder=\"price..\" value=\"{{coupon.price}}\" >\n      <br>\n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" (click)=\"updateCoupon()\">Update Coupon</button>\n        \n      </div>\n    </div>\n  </form>\n</div>\n\n\n<!-- <a routerLink=\"/home\">back to home</a> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Company/company-menu/company-menu.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Company/company-menu/company-menu.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\n    <aside>\n        <ul>\n        <div class=\"sidenav\">\n            <li><a routerLink=\"/company/add-coupon\" routerLinkActive=\"active-link\">Add Coupon</a></li>\n            <li><a routerLink=\"/company/update\" routerLinkActive=\"active-link\">Edit My Profile</a></li>\n            <li><a routerLink=\"/company/help\" routerLinkActive=\"active-link\">Need Help?</a></li>\n        </div>\n    </ul>\n    </aside>\n\n\n\n    <main>\n        <app-company-coupons></app-company-coupons>\n    </main>\n\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Company/company-update-profile/company-update-profile.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Company/company-update-profile/company-update-profile.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Edit my profile</h1>\n      <p>Please fill in this form to update your profile.</p>\n      <hr class=\"sep-2\" />\n      <label for=\"email\"><b>Company Name</b></label>\n      <br>\n      <input ngModel name=\"companyName\" type=\"text\" name=\"companyName\" [formControl]= \"companyName\"\n      [ngClass]=\"{'invalid':companyName.invalid && companyName.touched}\"  placeholder=\"Company name..\" >\n    <br>\n    <ul class=\"error\" *ngIf=\"companyName.dirty && companyName.invalid\">\n      <li *ngIf=\"companyName.errors?.required && companyName.touched\">Name is required</li>\n      <li *ngIf=\"companyName.errors?.minlength && companyName.touched\">Name too short. at least {{companyName.errors.minlength.requiredLength}} characters</li>\n      <li *ngIf=\"companyName.errors?.maxlength && companyName.dirty\">Name too long. max {{companyName.errors.maxlength.requiredLength}} characters</li>\n      <li *ngIf=\"companyName.dirty && companyName.errors?.pattern\">Name should start with a capital letter</li>\n    </ul>\n    <br>\n     <label for=\"psw\"><b>Company Email</b></label> <br>\n     <input type=\"text\" name=\"companyEmail\" [formControl]= \"companyEmail\"\n     [ngClass]=\"{'invalid':companyEmail.invalid && companyEmail.touched}\" placeholder=\"Company email..\" >\n    <br>\n    <ul class=\"error\" *ngIf=\"companyEmail.dirty && companyEmail.invalid\">\n    <li *ngIf=\"companyEmail.errors?.required && companyEmail.touched\">Email is required</li>\n    <li *ngIf=\"companyEmail.dirty && companyEmail.errors?.pattern\">Invalid Email</li>\n    </ul>\n    <br>\n\n     <label for=\"psw-repeat\"><b>Company Password</b></label> <br>\n     <input type=\"password\" name=\"companyPassword\" [formControl]= \"companyPassword\"\n     [ngClass]=\"{'invalid':companyPassword.invalid && companyPassword.touched}\" placeholder=\"Company password..\" >\n    <br>\n    <ul class=\"error\" *ngIf=\"companyPassword.dirty && companyPassword.invalid\">\n      \n      <li *ngIf=\"companyPassword.errors?.minlength && companyPassword.touched\">Password too short. at least {{companyPassword.errors.minlength.requiredLength}} characters</li>\n      <li *ngIf=\"companyPassword.errors?.maxlength && companyPassword.dirty\">Password too long. max {{companyPassword.errors.maxlength.requiredLength}} characters</li>\n      <li *ngIf=\"companyPassword.errors?.required && companyPassword.touched\">Password is required</li>\n      <li *ngIf=\"companyPassword.dirty && companyPassword.errors?.pattern\">Invalid password</li>\n      \n    </ul>\n    <br>\n     \n \n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" [disabled]=\"!registrationForm.valid\" (click)=\"updateCompany()\">Update</button>\n        \n      </div>\n    </div>\n  </form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Customer/customer-menu/customer-menu.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Customer/customer-menu/customer-menu.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\n    <aside>\n        <ul>\n        <div class=\"sidenav\">\n            <li><a routerLink=\"/customer/update\" routerLinkActive=\"active-link\">Edit My Profile</a></li>\n            <li><a routerLink=\"/customer/coupons\" routerLinkActive=\"active-link\">My Coupons</a></li>\n            <li><a routerLink=\"/customer/help\" routerLinkActive=\"active-link\">Need Help?</a></li>\n        </div>\n        </ul>\n            \n        \n    </aside>\n\n\n\n    <main>\n        \n        <app-deals></app-deals>\n        <!-- <app-customer-home></app-customer-home> -->\n    </main>\n\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"background\">\n<article>  \n    <h1>About us </h1>\n    <p>ElbiDeals is a coupon marketing site,\n        On our site you can see and purchase coupons from a variety of large companies\n        And small businesses in the country.</p>\n        <hr class=\"sep-1\"/>\n    <p>The site was founded and developed by Matan Elbaz in 2020,\n        The main purpose of the site is to submit and showcase my software development skills.\n        With this system, I hope to have more opportunities to continue to create software that will help people manage their lives more easily and conveniently!</p>\n    <hr class=\"sep-2\" />\n    <h3>A little about me:</h3>\n    <p>My name is Matan Elbaz, I'm 23 years old from Jerusalem, Israel. <br>\n        I am a junior JAVA software developer, studied at John Bryce College <br>\n        And since I started I haven't left the keyboard for too long :)</p>\n        <img  src=\"./assets/images/logo.png\" alt=\"ElbiDeals\" >\n        <p>Have fun!</p>\n       </article>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-admin/update-admin.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-admin/update-admin.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Edit my profile</h1>\n      <p>Please fill in this form to update your profile.</p>\n      <hr class=\"sep-2\" />\n  \n      \n      <label for=\"email\"><b>Admin Email</b></label>\n      <br>\n      <input type=\"text\" name=\"adminEmail\" [formControl]=\"adminEmail\" \n      [ngClass]=\"{'invalid':adminEmail.invalid && adminEmail.touched}\" placeholder=\"Email..\" value=\"{{admin.email}}\" >\n      <br>\n      <ul class=\"error\" *ngIf=\"adminEmail.dirty && adminEmail.invalid\">\n        <li *ngIf=\"adminEmail.errors?.required && adminEmail.touched\">Email is required</li>\n        <li *ngIf=\"adminEmail.dirty && adminEmail.errors?.pattern\">Invalid Email</li>\n      </ul>\n      <br>\n      <label for=\"psw\"><b>Admin Password</b></label>\n      <br>\n      <input type=\"password\" name=\"adminPassword\" [formControl]=\"adminPassword\" \n      [ngClass]=\"{'invalid':adminPassword.invalid && adminPassword.touched}\" placeholder=\"Password..\" value=\"{{admin.password}}\" >      \n      <br>\n      <ul class=\"error\" *ngIf=\"adminPassword.dirty && adminPassword.invalid\">\n      \n        <li *ngIf=\"adminPassword.errors?.minlength && adminPassword.touched\">Password too short. at least {{adminPassword.errors.minlength.requiredLength}} characters</li>\n        <li *ngIf=\"adminPassword.errors?.maxlength && adminPassword.dirty\">Password too long. max {{adminPassword.errors.maxlength.requiredLength}} characters</li>\n        <li *ngIf=\"adminPassword.errors?.required && adminPassword.touched\">Password is required</li>\n        <li *ngIf=\"adminPassword.dirty && adminPassword.errors?.pattern\">Invalid password</li>\n        \n      </ul>\n      <br>\n      \n  \n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" [disabled]=\"!registrationForm.valid\" (click)=\"updateAdmin()\">Update</button>\n        \n      </div>\n    </div>\n  </form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-details/company-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-details/company-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"con\">\n    <div *ngIf=\"company\" >\n    <div class=\"card\">\n        <img src=\"https://www.aldawliagroup.com/wp-content/uploads/2019/11/corporate-icon-png-8.png\" alt=\"Denim Jeans\" style=\"width:100%\">\n        <!-- https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png -->\n        <h1>Company Details:</h1>\n        <h4>Company id:</h4>\n        <p>{{company?.id}}</p>\n        <h4>Company name:</h4>\n        <p>{{company.name}}</p>\n        <h4>Company email:</h4>\n        <p>{{company?.email}}</p>\n        <h4>Company password:</h4>\n        <p>{{company?.password}}</p>\n        <button style=\"font-size: large;\" onclick=\"history.back(-1)\">Go Back</button>\n      </div>\n    </div>\n    </div>\n    <div *ngIf=\"!company\">\n        <h1 style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Company not found!</h1>\n        <app-not-found></app-not-found>\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupon-add/company-coupon-add.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupon-add/company-coupon-add.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Add new Coupon</h1>\n      <p>Please fill in this form to add a new coupon.</p>\n      <hr class=\"sep-2\" />\n\n      <label for=\"psw\"><b>Title</b></label>\n      <br>\n      <input type=\"text\" name=\"title\" [formControl]= \"coupontitle\" \n      [ngClass]=\"{'invalid':coupontitle.invalid && coupontitle.touched}\" placeholder=\"Title..\" >\n      <br>\n      <ul class=\"error\" *ngIf=\"coupontitle.dirty && coupontitle.invalid\">\n      \n        <li *ngIf=\"coupontitle.errors?.minlength && coupontitle.touched\">Title too short. at least {{coupontitle.errors.minlength.requiredLength}} characters</li>\n        <li *ngIf=\"coupontitle.errors?.maxlength && coupontitle.dirty\">Title too long. max {{coupontitle.errors.maxlength.requiredLength}} characters</li>\n        <li *ngIf=\"coupontitle.errors?.required && coupontitle.touched\">Title is required</li>\n        <li *ngIf=\"coupontitle.dirty && coupontitle.errors?.pattern\">Invalid title, start with a capital letter</li>\n        \n      </ul>\n      <br>\n      <label for=\"psw-repeat\"><b>Start Date</b></label>\n      <br>\n      <input type=\"date\" name=\"startDate\" [formControl]= \"couponstartDate\"\n      [ngClass]=\"{'invalid':couponstartDate.invalid && couponstartDate.touched}\" placeholder=\"Start Date..\" >\n      <br>\n      <ul class=\"error\" *ngIf=\"couponstartDate.dirty && couponstartDate.invalid\">\n      \n        <li *ngIf=\"couponstartDate.errors?.required && couponstartDate.touched\">Start date is required</li>\n      </ul>\n      <br>\n      <label for=\"psw-repeat\"><b>End Date</b></label>\n  <br>\n      <input type=\"date\" name=\"endDate\" [formControl]= \"couponendDate\" \n      [ngClass]=\"{'invalid':couponendDate.invalid && couponendDate.touched}\"placeholder=\"End Date..\" >\n  <br> \n  <ul class=\"error\" *ngIf=\"couponendDate.dirty && couponendDate.invalid\">\n      \n    <li *ngIf=\"couponendDate.errors?.required && couponendDate.touched\">End date is required</li>\n  </ul>\n  <br> \n      <label for=\"psw-repeat\"><b>Category</b></label>\n  <br>\n      <input type=\"number\" name=\"category\" [formControl]= \"couponcategory\"\n      [ngClass]=\"{'invalid':couponcategory.invalid && couponcategory.touched}\" placeholder=\"Category..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponcategory.dirty && couponcategory.invalid\">\n    <li *ngIf=\"couponcategory.errors?.min && couponcategory.touched\">Invalid category</li>\n    <li *ngIf=\"couponcategory.errors?.required && couponcategory.touched\">Category is required</li>\n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Amount</b></label>\n  <br>\n      <input type=\"number\" name=\"amount\" [formControl]= \"couponamount\" \n      [ngClass]=\"{'invalid':couponamount.invalid && couponamount.touched}\"placeholder=\"Amount..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponamount.dirty && couponamount.invalid\">\n    <li *ngIf=\"couponamount.errors?.min && couponamount.touched\">Invalid amount</li>\n    <li *ngIf=\"couponamount.errors?.required && couponamount.touched\">Amount is required</li>\n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Description</b></label>\n  <br>\n      <input type=\"text\" name=\"description\" [formControl]= \"coupondescription\" \n      [ngClass]=\"{'invalid':coupondescription.invalid && coupondescription.touched}\"placeholder=\"Description..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"coupondescription.dirty && coupondescription.invalid\">\n      \n    <li *ngIf=\"coupondescription.errors?.minlength && coupondescription.touched\">Description too short. at least {{coupondescription.errors.minlength.requiredLength}} characters</li>\n    <li *ngIf=\"coupondescription.errors?.maxlength && coupondescription.dirty\">Description too long. max {{coupondescription.errors.maxlength.requiredLength}} characters</li>\n    <li *ngIf=\"coupondescription.errors?.required && coupondescription.touched\">Description is required</li>\n    \n    \n  </ul>\n  <br>\n      <label for=\"psw-repeat\"><b>Price</b></label>\n  <br>\n      <input type=\"number\" name=\"price\" [formControl]= \"couponprice\" \n      [ngClass]=\"{'invalid':couponprice.invalid && couponprice.touched}\"placeholder=\"price..\" >\n  <br>\n  <ul class=\"error\" *ngIf=\"couponprice.dirty && couponprice.invalid\">\n    <li *ngIf=\"couponprice.errors?.min && couponprice.touched\">Invalid price(min 10$)</li>\n    <li *ngIf=\"couponprice.errors?.required && couponprice.touched\">Price is required</li>\n  </ul>\n  <br>\n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" [disabled]=\"!registrationForm.valid\" (click)=\"addCoupon()\">Add Coupon</button>\n        \n      </div>\n    </div>\n  </form>\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <h1>Add new coupon</h1>\n\n<form>\n    \n    Title: <input type=\"text\" name=\"title\" [formControl]= \"coupontitle\" placeholder=\"Title..\" required>\n    <br>\n    Start Date: <input type=\"date\" name=\"startDate\" [formControl]= \"couponstartDate\" placeholder=\"Start Date..\" required>\n    <br>\n    End Date: <input type=\"date\" name=\"endDate\" [formControl]= \"couponendDate\" placeholder=\"End Date..\" required>\n    <br>\n    Category: <input type=\"number\" name=\"category\" [formControl]= \"couponcategory\" placeholder=\"Category..\" required>\n    <br>\n    Amount: <input type=\"number\" name=\"amount\" [formControl]= \"couponamount\" placeholder=\"Amount..\" required>\n    <br>\n    Description: <input type=\"text\" name=\"description\" [formControl]= \"coupondescription\" placeholder=\"Description..\" required>\n    <br>\n    Price: <input type=\"number\" name=\"price\" [formControl]= \"couponprice\" placeholder=\"price..\" required>\n    <br>\n\n<button (click)=\"addCoupon()\">Add Coupon</button>\n</form>\n<br>\n<a routerLink=\"/home\">Back to home</a> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupon-update/company-coupon-update.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupon-update/company-coupon-update.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf= \"!coupon\">\n    <h2>Coupon Not Found!</h2>\n    <app-not-found></app-not-found>\n</div>\n\n<div *ngIf=\"coupon\">\n<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Update Coupon</h1>\n      <p>Please fill in this form to update coupon.</p>\n      <hr class=\"sep-2\" />\n  \n      <label for=\"psw\"><b>Title</b></label>\n      <br>\n      <input type=\"text\" name=\"coupontitle\" [formControl]=\"coupontitle\" placeholder=\"Title..\" value=\"{{coupon.title}}\">\n      <br>\n      <label for=\"psw-repeat\"><b>Start Date</b></label>\n      <br>\n      <input type=\"date\" name=\"couponstartDate\" [formControl]=\"couponstartDate\" placeholder=\"Start Date..\" value=\"{{coupon.startDate}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>End Date</b></label>\n      <br>\n      <input type=\"date\" name=\"couponendDate\" [formControl]=\"couponendDate\" placeholder=\"End Date..\" value=\"{{coupon.endDate}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>Category</b></label>\n      <br>\n      <input type=\"number\" name=\"couponcategory\" [formControl]=\"couponcategory\" placeholder=\"Category..\" value=\"{{coupon.category}}\">\n      <br>\n      <label for=\"psw-repeat\"><b>Amount</b></label>\n      <br>\n      <input type=\"number\" name=\"couponamount\" [formControl]=\"couponamount\" placeholder=\"Amount..\" value=\"{{coupon.amount}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>Description</b></label>\n      <br>\n      <input type=\"text\" name=\"coupondescription\" [formControl]=\"coupondescription\" placeholder=\"Description..\" value=\"{{coupon.description}}\" >\n      <br>\n      <label for=\"psw-repeat\"><b>Price</b></label>\n      <br>\n      <input type=\"number\" name=\"couponprice\" [formControl]=\"couponprice\" placeholder=\"price..\" value=\"{{coupon.price}}\" >\n      <br>\n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" (click)=\"updateCoupon()\">Update Coupon</button>\n        \n      </div>\n    </div>\n  </form>\n</div>\n\n\n<!-- <h1>Edit Coupon</h1>\n\n<form>\n\n    tite: <input type=\"text\" name=\"coupontitle\" [formControl]=\"coupontitle\" placeholder=\"Title..\" value=\"{{coupon.title}}\">\n    <br>\n    start date:<input type=\"date\" name=\"couponstartDate\" [formControl]=\"couponstartDate\" placeholder=\"Start Date..\" value=\"{{coupon.startDate}}\" >\n    <br>\n    end date: <input type=\"date\" name=\"couponendDate\" [formControl]=\"couponendDate\" placeholder=\"End Date..\" value=\"{{coupon.endDate}}\" >\n    <br>\n    category:  <input type=\"number\" name=\"couponcategory\" [formControl]=\"couponcategory\" placeholder=\"Category..\" value=\"{{coupon.category}}\">\n    <br>\n    amount : <input type=\"number\" name=\"couponamount\" [formControl]=\"couponamount\" placeholder=\"Amount..\" value=\"{{coupon.amount}}\" >\n    <br>\n    description: <input type=\"text\" name=\"coupondescription\" [formControl]=\"coupondescription\" placeholder=\"Description..\" value=\"{{coupon.description}}\" >\n    <br>\n    price :<input type=\"number\" name=\"couponprice\" [formControl]=\"couponprice\" placeholder=\"price..\" value=\"{{coupon.price}}\" >\n    <br>\n    \n    <button type=\"submit\" (click)=\"updateCoupon()\">Update Coupon</button>\n</form>\n<br>\n<a routerLink=\"/home\">back to home</a> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupons/company-coupons.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupons/company-coupons.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div>\n    <table id=\"myTable\" *ngIf=\"coupons\" style=\" border: 1px;\">\n\n        <caption>\n            <h3>Your Company Coupons</h3>\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilter($event)\" placeholder=\"Search Coupon\">\n        </caption>\n        <thead>\n            <tr class=\"header\">\n                <th>Company</th>\n                <th>Title</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Category</th>\n                <th>Amount</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Image</th>\n                <th>Delete</th>\n                <th>Edit</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let c of findedCoupons\" >\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.companyName}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.title}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.startDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.endDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.category}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.amount}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.description}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.price}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">\n                    <!-- <a routerLink=\"/coupon-details/{{p.id}}\"> <app-thumbnail imageSource=\"assets/imagess/coupons/{{p.id}}.jpg\"></app-thumbnail></a> -->\n                </td>\n                <td>\n                    <button  type=\"button\" (click)=\"deleteCoupon(c.id)\">Delete</button>\n                </td>\n                <td>\n                    <button  type=\"button\" routerLink=\"/compnay/company-coupon-update/{{c.id}}\">Edit</button>\n                </td>\n                    \n                \n            </tr>\n            \n            \n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root/root.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root/root.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"modeService.mode == modeService.LOOGED_OUT\">\n    <app-login></app-login>\n</div>\n\n<div *ngIf=\"modeService.mode == modeService.LOOGED_IN\">\n    <app-home></app-home>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n    <div class=\"container\">\n      <div class=\"screen\">\n        <div class=\"screen-header\">\n          <div class=\"screen-header-left\">\n            <div class=\"screen-header-button close\"></div>\n            <div class=\"screen-header-button maximize\"></div>\n            <div class=\"screen-header-button minimize\"></div>\n          </div>\n          <div class=\"screen-header-right\">\n            <div class=\"screen-header-ellipsis\"></div>\n            <div class=\"screen-header-ellipsis\"></div>\n            <div class=\"screen-header-ellipsis\"></div>\n          </div>\n        </div>\n        <div class=\"screen-body\">\n          <div class=\"screen-body-item left\">\n            <div class=\"app-title\">\n              <span>CONTACT</span>\n              <span>US</span>\n            </div>\n            <div class=\"app-contact\">CONTACT INFO-</div>\n            <div class=\"app-contact\">Email: matanelbaz00@gmail.com</div>\n            <div class=\"app-contact\">Phone Number : +972-50-8111366</div>\n\n          </div>\n          <form (ngSubmit)=\"submitForm()\">\n          <div class=\"screen-body-item\">\n            <div class=\"app-form\">\n              <div class=\"app-form-group\">\n                <input class=\"app-form-control\" name=\"name\" type=\"text\" placeholder=\"Name\" [(ngModel)] = \"name\" required >\n              </div>\n              <div class=\"app-form-group\">\n                <input class=\"app-form-control\" name=\"email\" type=\"email\" placeholder=\"Email\"  [(ngModel)] = \"email\" required>\n              </div>\n              <div class=\"app-form-group\">\n              <div class=\"app-form-group message\">\n                <input class=\"app-form-control\" name=\"message\" type=\"text\" placeholder=\"Message\"  [(ngModel)] = \"message\" required>\n              </div>\n              <div class=\"app-form-group buttons\">\n                <button class=\"app-form-button\" type=\"reset\">CANCEL</button>\n                <button class=\"app-form-button\" type=\"submit\">SEND</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"con\">\n    <div *ngIf=\"coupon\" >\n        \n    <div class=\"card\">\n        <button class=\"buy\" *ngIf=\"clientType == 1\" style=\"font-size: large;\" routerLink=\"/customer/purchase-coupon/{{coupon.id}}\">Buy it now!</button>\n        <img src=\"https://imageog.flaticon.com/icons/png/512/2271/2271018.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF\" alt=\"Coupon image\" style=\"width:100%\">\n    \n        <h1>Coupon Details:</h1>\n        <h4>Title:</h4>\n        <p>{{coupon?.title}}</p>\n        <h4>Company name:</h4>\n        <p>{{coupon?.companyName}}</p>\n        <h4>Start Date:</h4>\n        <p>{{coupon?.startDate}}</p>\n        <h4>End Date:</h4>\n        <p>{{coupon?.endDate}}</p>\n        <h4>Category:</h4>\n        <p>{{coupon?.category}}</p>\n        <h4>Amount:</h4>\n        <p>{{coupon?.amount}}</p>\n        <h4>Description:</h4>\n        <p>{{coupon?.description}}</p>\n        <h4>Price:</h4>\n        <p class=\"price\">{{coupon?.price}}</p>\n        <br>\n         <!-- <img style=\"width: 300px;\" src=\"assets/imagess/products/{{product.id}}.jpg\" alt=\"coupon\"> -->\n        <button class=\"but\" style=\"font-size: large;\" onclick=\"history.back(-1)\">Go Back</button>\n        \n      </div>\n    </div>\n    </div>\n\n    <div *ngIf=\"!coupon\">\n        <h1 style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Coupon not found</h1>\n        <app-not-found></app-not-found>\n    </div>\n    \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-add/customer-add.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-add/customer-add.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Add new Customer</h1>\n      <p>Please fill in this form to create new customer.</p>\n      <hr class=\"sep-2\" />\n  \n      <label for=\"first name\"><b>Customer First Name</b></label>\n      <br>\n      <input ngModel type=\"text\" name=\"customerFirstName\" [formControl]= \"customerFirstName\" \n      [ngClass]=\"{'invalid':customerFirstName.invalid && customerFirstName.touched}\" placeholder=\"Customer first name..\" >\n      <br>\n      <ul class=\"error\" *ngIf=\"customerFirstName.dirty && customerFirstName.invalid\">\n        <li *ngIf=\"customerFirstName.errors?.required && customerFirstName.touched\">First name is required</li>\n        <li *ngIf=\"customerFirstName.errors?.minlength && customerFirstName.touched\">First name too short. at least {{customerFirstName.errors.minlength.requiredLength}} characters</li>\n        <li *ngIf=\"customerFirstName.errors?.maxlength && customerFirstName.dirty\">First name too long. max {{customerFirstName.errors.maxlength.requiredLength}} characters</li>\n        <li *ngIf=\"customerFirstName.dirty && customerFirstName.errors?.pattern\">First name should start with a capital letter</li>\n      </ul>\n      <br>\n      <label for=\"last name\"><b>Customer First Name</b></label>\n      <br>\n      <input type=\"text\" name=\"customerLastName\" [formControl]= \"customerLastName\" \n      [ngClass]=\"{'invalid':customerLastName.invalid && customerLastName.touched}\" placeholder=\"Customer last name..\">\n      <br>\n      <ul class=\"error\" *ngIf=\"customerLastName.dirty && customerLastName.invalid\">\n        <li *ngIf=\"customerLastName.errors?.required && customerLastName.touched\">Last name is required</li>\n        <li *ngIf=\"customerLastName.errors?.minlength && customerLastName.touched\">Last name too short. at least {{customerLastName.errors.minlength.requiredLength}} characters</li>\n        <li *ngIf=\"customerLastName.errors?.maxlength && customerLastName.dirty\">Last name too long. max {{customerLastName.errors.maxlength.requiredLength}} characters</li>\n      </ul>\n      <br>\n      <label for=\"email\"><b>Customer Email</b></label>\n      <br>\n      <input type=\"text\" name=\"customerEmail\" [formControl]= \"customerEmail\" \n      [ngClass]=\"{'invalid':customerEmail.invalid && customerEmail.touched}\" placeholder=\"Customer email..\">\n      <br>\n      <ul class=\"error\" *ngIf=\"customerEmail.dirty && customerEmail.invalid\">\n        <li *ngIf=\"customerEmail.errors?.required && customerEmail.touched\">Email is required</li>\n        <li *ngIf=\"customerEmail.dirty && customerEmail.errors?.pattern\">Invalid Email</li>\n      </ul>\n      <br>\n      <label for=\"psw-repeat\"><b>Customer Password</b></label>\n      <br>\n      <input type=\"password\" name=\"customerPassword\" [formControl]= \"customerPassword\" \n      [ngClass]=\"{'invalid':customerPassword.invalid && customerPassword.touched}\" placeholder=\"Customer password..\">  \n      <br>\n      <ul class=\"error\" *ngIf=\"customerPassword.dirty && customerPassword.invalid\">\n      \n        <li *ngIf=\"customerPassword.errors?.minlength && customerPassword.touched\">Password too short. at least {{customerPassword.errors.minlength.requiredLength}} characters</li>\n        <li *ngIf=\"customerPassword.errors?.maxlength && customerPassword.dirty\">Password too long. max {{customerPassword.errors.maxlength.requiredLength}} characters</li>\n        <li *ngIf=\"customerPassword.errors?.required && customerPassword.touched\">Password is required</li>\n        <li *ngIf=\"customerPassword.dirty && customerPassword.errors?.pattern\">Invalid password</li>\n        \n      </ul>\n      <br>\n  \n      \n  \n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" [disabled]=\"!registrationForm.valid\" (click)=\"addCustomer()\">Add Comapny</button>\n        \n      </div>\n    </div>\n  </form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-details/customer-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-details/customer-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"con\">\n<div *ngIf=\"customer\" >\n<div class=\"card\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png\" alt=\"Denim Jeans\" style=\"width:100%\">\n    <h1>Customer Details:</h1>\n    <h4>Customer id:</h4>\n    <p>{{customer?.id}}</p>\n    <h4>First name: </h4>\n    <p>{{customer.firstName}}</p>\n    <h4>Last name:</h4>\n    <p>{{customer.lastName}}</p>\n    <h4>Customer email:</h4>\n    <p>{{customer?.email}}</p>\n    <h4>Customer password: </h4>\n    <p>{{customer?.password}}</p>\n    <button style=\"font-size: large;\" onclick=\"history.back(-1)\">Go Back</button>\n  </div>\n</div>\n</div>\n<div *ngIf=\"!customer\">\n    <h1 style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">Customer not found!</h1>\n    <app-not-found></app-not-found>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-update/customer-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-update/customer-update.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf= \"!customer\">\n    <h2>Customer Not Found!</h2>\n    <app-not-found></app-not-found>\n</div>\n\n<div *ngIf = \"customer\">\n<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Edit Customer</h1>\n      <p>Please fill in this form to update customer.</p>\n      <hr class=\"sep-2\" />\n\n      <label for=\"first name\"><b>First Name</b></label>\n      <br>\n      <input type=\"text\" name=\"customerFirstName\" [formControl]=\"customerFirstName\" placeholder=\"First name..\" value=\"{{customer.firstName}}\">\n      <br>\n      <label for=\"last name\"><b>Last Name</b></label>\n      <br>\n      <input type=\"text\" name=\"customerLastName\" [formControl]=\"customerLastName\" placeholder=\"Last name..\" value=\"{{customer.lastName}}\">\n      <br>\n      \n      <label for=\"email\"><b>Customer Email</b></label>\n      <br>\n      <input type=\"text\" name=\"customerEmail\" [formControl]=\"customerEmail\" placeholder=\"Email..\" value=\"{{customer.email}}\" >\n      <br>\n      <label for=\"psw\"><b>Customer Password</b></label>\n      <br>\n      <input type=\"text\" name=\"customerPassword\" [formControl]=\"customerPassword\" placeholder=\"Password..\" value=\"{{customer.password}}\" >     \n      <br>\n      \n  \n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button type=\"submit\" class=\"signupbtn\" (click)=\"updateCustomer()\">Update Customer</button>\n        \n      </div>\n    </div>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-private-coupons/customer-private-coupons.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-private-coupons/customer-private-coupons.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\n\n<div>\n    <table id=\"myTable\" *ngIf=\"coupons\" style=\" border: 1px;\">\n\n        <caption>\n            <h3>My Coupons</h3>\n            <input type=\"text\" id=\"myInput\" (input)=\"applyFilter($event)\" placeholder=\"Search Coupon\">\n        </caption>\n        <thead>\n            <tr class=\"header\">\n                <th>Company</th>\n                <th>Title</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Category</th>\n                <th>Amount</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Image</th>\n                \n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let c of findedCoupons\" >\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.companyName}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.title}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.startDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.endDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.category}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.amount}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.description}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.price}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">\n                    <!-- <a routerLink=\"/coupon-details/{{p.id}}\"> <app-thumbnail imageSource=\"assets/imagess/coupons/{{p.id}}.jpg\"></app-thumbnail></a> -->\n                </td>\n                \n            </tr>\n        </tbody>\n    </table>\n    <button style=\"font-size: large;\" onclick=\"history.back(-1)\">Go Back</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-update-profile/customer-update-profile.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-update-profile/customer-update-profile.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"action_page.php\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <h1>Edit my profile</h1>\n      <p>Please fill in this form to update your profile.</p>\n      <hr class=\"sep-2\" />\n      <label for=\"email\"><b>First Name</b></label>\n      <br>\n      <input type=\"text\" name=\"customerFirstName\" [formControl]=\"customerFirstName\" placeholder=\"First name..\" value=\"{{customer.firstName}}\">\n      <br>\n      <label for=\"email\"><b>Last Name</b></label>\n      <br>\n      <input type=\"text\" name=\"customerLastName\" [formControl]=\"customerLastName\" placeholder=\"Last name..\" value=\"{{customer.lastName}}\">\n      <br>\n       <label for=\"email\"><b>Your Email</b></label>\n       <br>\n       <input type=\"text\" name=\"customerEmail\" [formControl]=\"customerEmail\" placeholder=\"Email..\" value=\"{{customer.email}}\" >\n       <br>\n      <label for=\"psw\"><b>Your Password</b></label>\n      <br>\n      <input type=\"text\" name=\"customerPassword\" [formControl]=\"customerPassword\" placeholder=\"Password..\" value=\"{{customer.password}}\" >      \n      <br>\n      \n  \n      <div class=\"clearfix\">\n        <button routerLink=\"/home\" type=\"button\" class=\"cancelbtn\">Cancel</button>\n        <button class=\"signupbtn\" (click)=\"updateCustomer()\">Update</button>\n        \n      </div>\n    </div>\n  </form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/purchase-coupon/purchase-coupon.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/purchase-coupon/purchase-coupon.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf= \"coupon\">\n<div class=\"row\">\n    \n    <div class=\"col-75\">\n      <div class=\"container\">\n        <input (click)=\"purchaseCoupon()\" type=\"submit\" value=\"Continue to checkout\" class=\"btn\">   \n        <br>\n        <input onclick=\"history.back(-1)\" type=\"submit\" value=\"Go Back\" class=\"btn\">\n        \n        \n        <form action=\"/action_page.php\">\n  \n          <div class=\"row\">\n            <div class=\"col-50\">\n              <h3>Billing Address</h3>\n              <label for=\"fname\"><i class=\"fa fa-user\"></i> Full Name</label>\n              <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"John M. Doe\">\n              <label for=\"email\"><i class=\"fa fa-envelope\"></i> Email</label>\n              <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"john@example.com\">\n              <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Address</label>\n              <input type=\"text\" id=\"adr\" name=\"address\" placeholder=\"542 W. 15th Street\">\n              <label for=\"city\"><i class=\"fa fa-institution\"></i> City</label>\n              <input type=\"text\" id=\"city\" name=\"city\" placeholder=\"New York\">\n  \n              <div class=\"row\">\n                <div class=\"col-50\">\n                  <label for=\"state\">State</label>\n                  <input type=\"text\" id=\"state\" name=\"state\" placeholder=\"NY\">\n                </div>\n                <div class=\"col-50\">\n                  <label for=\"zip\">Zip</label>\n                  <input type=\"text\" id=\"zip\" name=\"zip\" placeholder=\"10001\">\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-50\">\n              <h3>Payment</h3>\n              <label for=\"fname\">Accepted Cards</label>\n              <div class=\"icon-container\">\n                <i class=\"fa fa-cc-visa\" style=\"color:navy;\"></i>\n                <i class=\"fa fa-cc-amex\" style=\"color:blue;\"></i>\n                <i class=\"fa fa-cc-mastercard\" style=\"color:red;\"></i>\n                <i class=\"fa fa-cc-discover\" style=\"color:orange;\"></i>\n              </div>\n              <label for=\"cname\">Name on Card</label>\n              <input type=\"text\" id=\"cname\" name=\"cardname\" placeholder=\"John More Doe\">\n              <label for=\"ccnum\">Credit card number</label>\n              <input type=\"text\" id=\"ccnum\" name=\"cardnumber\" placeholder=\"1111-2222-3333-4444\">\n              <label for=\"expmonth\">Exp Month</label>\n              <input type=\"text\" id=\"expmonth\" name=\"expmonth\" placeholder=\"September\">\n  \n              <div class=\"row\">\n                <div class=\"col-50\">\n                  <label for=\"expyear\">Exp Year</label>\n                  <input type=\"text\" id=\"expyear\" name=\"expyear\" placeholder=\"2018\">\n                </div>\n                <div class=\"col-50\">\n                  <label for=\"cvv\">CVV</label>\n                  <input type=\"text\" id=\"cvv\" name=\"cvv\" placeholder=\"352\">\n                </div>\n              </div>\n            </div>\n  \n          </div>\n          <label>\n            <input type=\"checkbox\" checked=\"checked\" name=\"sameadr\"> Shipping address same as billing\n          </label>\n          <input type=\"submit\" value=\"Continue to checkout\" class=\"btn\">\n        </form>\n        \n      </div>\n    </div>\n    \n  </div>\n  </div>\n  <div *ngIf= \"!coupon\">\n    <h1>Coupon not found</h1>\n    <app-not-found></app-not-found>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deals.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deals.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\n   \n    <div class=\"card\" *ngIf=\"coupons\">\n        <div class=\"grid\" *ngFor = \"let c of findedCoupons\">\n            <div class=\"card\">\n                <img src=\"https://imageog.flaticon.com/icons/png/512/2271/2271018.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF\" alt=\"Coupon image\" style=\"width:100%\">\n                <h1>Coupon Details:</h1>\n        <h4>Title:</h4>\n        <p>{{c.title}}</p>\n        <h4>Company name:</h4>\n        <p>{{c.companyName}}}</p>\n        <h4>Start Date:</h4>\n        <p>{{c.startDate}}</p>\n        <h4>End Date:</h4>\n        <p>{{c.endDate}}</p>\n        <h4>Category:</h4>\n        <p>{{c.category}}</p>\n        <h4>Amount:</h4>\n        <p>{{c.amount}}</p>\n        <h4>Description:</h4>\n        <p>{{c.description}}</p>\n        <h4>Price:</h4>\n        <p class=\"price\">{{c.price}}</p>\n             \n    </div>\n    </div>\n</div>\n\n\n -->\n\n<section> \n    <!-- <input required type=\"number\" id=\"couponId\" placeholder=\"Coupon ID\" [(ngModel)]=\"couponId\" name=\"couponId\">\n<button (click)=\"getAllCoupons()\">getCoupon</button> -->\n<div>\n    <table id=\"myTable\" *ngIf=\"coupons\" style=\" border: 1px;\">\n\n        <caption>\n            <h3>Coupons</h3>\n        </caption>\n        <thead>\n            <tr class=\"header\">\n                <th>Company</th>\n                <th>Title</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Category</th>\n                <th>Amount</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Image</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let c of findedCoupons\" >\n                \n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.companyName}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.title}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.startDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.endDate}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.category}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.amount}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.description}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">{{c.price}}</td>\n                <td routerLink=\"/coupon-details/{{c.id}}\">\n                    <!-- <a routerLink=\"/coupon-details/{{p.id}}\"> <app-thumbnail imageSource=\"assets/imagess/coupons/{{p.id}}.jpg\"></app-thumbnail></a> -->\n                </td>\n                \n\n               \n                    \n                \n            </tr>\n            \n            \n        </tbody>\n    </table>\n\n    \n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/design/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/design/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"footer\">\n    &copy; All rights reserved to Matan Elbaz\n    <a href=\"\"><script>document.write(new Date().getFullYear())</script></a>\n    <a href=\"https://www.linkedin.com/in/matan-elbaz-26097a193/\" class=\"fa fa-linkedin\" ></a>\n    <a href=\"https://www.facebook.com/matan.elbaz1\" class=\"fa fa-facebook\"></a>\n    <a href=\"mailto:matanelbaz00@gmail.com\" class=\"fa fa-google\" ></a>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/design/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/design/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<header>\n    <img routerLink=\"home\" routerLinkActive=\"active\" src=\"./assets/images/logo.png\" alt=\"ElbiDeals\" >\n   \n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/design/home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/design/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <app-login *ngIf=\"modeService.clientType == null\"></app-login>  \n        <app-admin-menu *ngIf=\"modeService.clientType == '-1'\"></app-admin-menu>\n        <app-company-menu *ngIf=\"modeService.clientType == '2'\"></app-company-menu>\n        <app-customer-menu *ngIf=\"modeService.clientType == '1'\"></app-customer-menu>   \n       \n        \n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header>\n        <app-header></app-header>\n        <app-menu></app-menu>\n    </header>\n\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n\n    <footer>\n        <app-footer></app-footer>\n    </footer>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <html lang=\"en-US\"> -->\n<div class=\"background\">\n\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Login</title>\n\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\">\n\n  </head>\n  <div id=\"login\">\n    <form action=\"#\" #loginInfo=\"ngForm\" name='form-login'>\n      <span class=\"fontawesome-user\"></span>\n      <input #userEmail=\"ngModel\" required type=\"text\" id=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\"\n        autocomplete=\"email\">\n\n      <div *ngIf=\"userEmail.errors && (userEmail.dirty || userEmail.touched)\" class=\"alert alert-danger\">\n        <div class=\"req\" [hidden]=\"!userEmail.errors.required\">\n      Email is required\n        </div>\n      </div>\n\n      <span class=\"fontawesome-lock\"></span>\n\n      <input #userPass=\"ngModel\" required type=\"password\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"\n        name=\"password\" autocomplete=\"current-password\">\n\n      <div *ngIf=\"userPass.errors && (userPass.dirty || userPass.touched)\" class=\"alert alert-danger\">\n        <div class=\"req\" [hidden]=\"!userPass.errors.required\">\n        Password is required\n        </div>\n      </div>\n\n      <input [disabled]=\"!loginInfo.form.valid\" type=\"submit\" value=\"Login\" (click)=\"login()\" name=\"login\">\n\n\n    </form>\n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topnav\">\n    <a routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n    <a routerLink=\"deals\" routerLinkActive=\"active\">Our Deals</a>\n    <a routerLink=\"about\" routerLinkActive=\"active\">About us</a>\n    <a routerLink=\"contact\" routerLinkActive=\"active\">Contact</a>\n    \n    <a id=\"logout\" *ngIf=\"online() == true\" routerLink=\"login\" routerLinkActive=\"bb\" (click)=\"logout()\">Log-Out</a>\n    \n    <div class=\"search-container\">\n        <form action=\"/action_page.php\">\n            \n            <input type=\"text\" (input)=\"applyFilter($event)\" placeholder=\"Search..\" name=\"search\">\n            <link rel=\"stylesheet\"\n                href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n            <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n\n        </form>\n\n    </div>\n</div>\n\n<div style=\"padding-left:16px\">\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n        <path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n        <path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n        <path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n        <path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n    </g>\n</svg>\n<div class=\"message-box\">\n  <h1>404</h1>\n  <p>Page not found</p>\n  <div class=\"buttons-con\">\n    <div class=\"action-link-wrap\">\n      <a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Go Back</a>\n      <a routerLink=\"/home\" class=\"link-button\">Go to Home Page</a>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Admin/admin-companies/admin-companies.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Admin/admin-companies/admin-companies.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    height: 100vh;\r\n    /* overflow: scroll; */\r\n  }\r\n  \r\n  table {\r\n    text-align: center;\r\n    margin: auto;\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n  \r\n  tr, td, th {\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n  \r\n  #myInput {\r\n    background-image: url('/css/searchicon.png');\r\n    /* Add a search icon to input */\r\n    background-position: 10px 12px;\r\n    /* Position the search icon */\r\n    background-repeat: no-repeat;\r\n    /* Do not repeat the icon image */\r\n    width: 20%;\r\n  \r\n    /* Full-width */\r\n    font-size: 16px;\r\n    /* Increase font-size */\r\n    padding: 12px 20px 12px 40px;\r\n    /* Add some padding */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    margin-bottom: 10px;\r\n    margin-left: 15px;\r\n    /* Add some space below the input */\r\n  }\r\n  \r\n  #myTable {\r\n    \r\n    background-color: white;\r\n    border-collapse: collapse;\r\n    /* Collapse borders */\r\n    width: 85%;\r\n    /* Full-width */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    font-size: 18px;\r\n    /* Increase font-size */\r\n  }\r\n  \r\n  #myTable th, #myTable td {\r\n    text-align: left;\r\n    /* Left-align text */\r\n    padding: 12px;\r\n    /* Add padding */\r\n  }\r\n  \r\n  #myTable tr {\r\n    /* Add a bottom border to all table rows */\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  #myTable tr.header, #myTable tr:hover {\r\n    /* Add a grey background color to the table header and on hover */\r\n    background-color: rgba(8, 139, 30, 0.527);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vYWRtaW4tY29tcGFuaWVzL2FkbWluLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsNENBQTRDO0lBQzVDLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsVUFBVTs7SUFFVixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQ0FBbUM7RUFDckM7O0VBRUE7O0lBRUUsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsaUVBQWlFO0lBQ2pFLHlDQUF5QztFQUMzQyIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2FkbWluLWNvbXBhbmllcy9hZG1pbi1jb21wYW5pZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMjI0LCA5MiwgOTIpO1xyXG4gIH1cclxuICBcclxuICB0ciwgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDIyNCwgOTIsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgI215SW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvY3NzL3NlYXJjaGljb24ucG5nJyk7XHJcbiAgICAvKiBBZGQgYSBzZWFyY2ggaWNvbiB0byBpbnB1dCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMnB4O1xyXG4gICAgLyogUG9zaXRpb24gdGhlIHNlYXJjaCBpY29uICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLyogRG8gbm90IHJlcGVhdCB0aGUgaWNvbiBpbWFnZSAqL1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICBcclxuICAgIC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8qIEluY3JlYXNlIGZvbnQtc2l6ZSAqL1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4IDEycHggNDBweDtcclxuICAgIC8qIEFkZCBzb21lIHBhZGRpbmcgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgLyogQWRkIHNvbWUgc3BhY2UgYmVsb3cgdGhlIGlucHV0ICovXHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLyogQ29sbGFwc2UgYm9yZGVycyAqL1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRoLCAjbXlUYWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogTGVmdC1hbGlnbiB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgLyogQWRkIHBhZGRpbmcgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUgdHIge1xyXG4gICAgLyogQWRkIGEgYm90dG9tIGJvcmRlciB0byBhbGwgdGFibGUgcm93cyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRyLmhlYWRlciwgI215VGFibGUgdHI6aG92ZXIge1xyXG4gICAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0YWJsZSBoZWFkZXIgYW5kIG9uIGhvdmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEzOSwgMzAsIDAuNTI3KTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/Admin/admin-companies/admin-companies.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Admin/admin-companies/admin-companies.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompaniesComponent", function() { return AdminCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");




let AdminCompaniesComponent = class AdminCompaniesComponent {
    constructor(activeRoute, companyService) {
        this.activeRoute = activeRoute;
        this.companyService = companyService;
    }
    ngOnInit() {
        this.getCompanies();
    }
    getCompanies() {
        let obsOfCoupons = this.companyService.getAllCompanies(localStorage.getItem('token'));
        obsOfCoupons.subscribe(arr => {
            this.companies = arr;
            this.findedCompanies = [];
            for (const c of this.companies) {
                this.findedCompanies.push(c);
            }
        }, err => {
            alert(err.error.message);
        });
    }
    deleteCompany(id) {
        var isDelete = confirm("Are you sure that you want to remove company?");
        if (isDelete) {
            this.companyService.deleteCompany(id, localStorage.getItem("token")).subscribe(msg => {
                this.ngOnInit();
            }, err => {
                let obj = JSON.parse(err.error);
                alert(obj.message);
            });
        }
    }
    applyFilter(event) {
        let q = event.target.value;
        let arr = this.companies.filter((c) => {
            return c.name.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCompanies = arr;
    }
    applyFilterEmail(event) {
        let q = event.target.value;
        let arr = this.companies.filter((c) => {
            return c.email.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCompanies = arr;
    }
};
AdminCompaniesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"] }
];
AdminCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-companies/admin-companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-companies.component.css */ "./src/app/Admin/admin-companies/admin-companies.component.css")).default]
    })
], AdminCompaniesComponent);



/***/ }),

/***/ "./src/app/Admin/admin-coupons/admin-coupons.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Admin/admin-coupons/admin-coupons.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  height: 100vh;\r\n  /* overflow: scroll; */\r\n}\r\n\r\ntable {\r\n  text-align: center;\r\n  margin: auto;\r\n  border: solid rgb(224, 92, 92);\r\n}\r\n\r\ntr, td, th {\r\n  border: solid rgb(224, 92, 92);\r\n}\r\n\r\n#myInput {\r\n  background-image: url('/css/searchicon.png');\r\n  /* Add a search icon to input */\r\n  background-position: 10px 12px;\r\n  /* Position the search icon */\r\n  background-repeat: no-repeat;\r\n  /* Do not repeat the icon image */\r\n  width: 20%;\r\n\r\n  /* Full-width */\r\n  font-size: 16px;\r\n  /* Increase font-size */\r\n  padding: 12px 20px 12px 40px;\r\n  /* Add some padding */\r\n  border: 1px solid #ddd;\r\n  /* Add a grey border */\r\n  margin-bottom: 10px;\r\n  margin-left: 15px;\r\n  /* Add some space below the input */\r\n}\r\n\r\n#myTable {\r\n  background-color: white;\r\n  border-collapse: collapse;\r\n  /* Collapse borders */\r\n  width: 85%;\r\n  /* Full-width */\r\n  border: 1px solid #ddd;\r\n  /* Add a grey border */\r\n  font-size: 18px;\r\n  /* Increase font-size */\r\n}\r\n\r\n#myTable th, #myTable td {\r\n  text-align: left;\r\n  /* Left-align text */\r\n  padding: 12px;\r\n  /* Add padding */\r\n}\r\n\r\n#myTable tr {\r\n  /* Add a bottom border to all table rows */\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n#myTable tr.header, #myTable tr:hover {\r\n  /* Add a grey background color to the table header and on hover */\r\n  background-color: rgba(8, 139, 30, 0.527);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vYWRtaW4tY291cG9ucy9hZG1pbi1jb3Vwb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxVQUFVOztFQUVWLGVBQWU7RUFDZixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9hZG1pbi1jb3Vwb25zL2FkbWluLWNvdXBvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IHNvbGlkIHJnYigyMjQsIDkyLCA5Mik7XHJcbn1cclxuXHJcbnRyLCB0ZCwgdGgge1xyXG4gIGJvcmRlcjogc29saWQgcmdiKDIyNCwgOTIsIDkyKTtcclxufVxyXG5cclxuI215SW5wdXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Nzcy9zZWFyY2hpY29uLnBuZycpO1xyXG4gIC8qIEFkZCBhIHNlYXJjaCBpY29uIHRvIGlucHV0ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMnB4O1xyXG4gIC8qIFBvc2l0aW9uIHRoZSBzZWFyY2ggaWNvbiAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLyogRG8gbm90IHJlcGVhdCB0aGUgaWNvbiBpbWFnZSAqL1xyXG4gIHdpZHRoOiAyMCU7XHJcblxyXG4gIC8qIEZ1bGwtd2lkdGggKi9cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgcGFkZGluZzogMTJweCAyMHB4IDEycHggNDBweDtcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgLyogQWRkIHNvbWUgc3BhY2UgYmVsb3cgdGhlIGlucHV0ICovXHJcbn1cclxuXHJcbiNteVRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIC8qIENvbGxhcHNlIGJvcmRlcnMgKi9cclxuICB3aWR0aDogODUlO1xyXG4gIC8qIEZ1bGwtd2lkdGggKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIC8qIEFkZCBhIGdyZXkgYm9yZGVyICovXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8qIEluY3JlYXNlIGZvbnQtc2l6ZSAqL1xyXG59XHJcblxyXG4jbXlUYWJsZSB0aCwgI215VGFibGUgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLyogTGVmdC1hbGlnbiB0ZXh0ICovXHJcbiAgcGFkZGluZzogMTJweDtcclxuICAvKiBBZGQgcGFkZGluZyAqL1xyXG59XHJcblxyXG4jbXlUYWJsZSB0ciB7XHJcbiAgLyogQWRkIGEgYm90dG9tIGJvcmRlciB0byBhbGwgdGFibGUgcm93cyAqL1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jbXlUYWJsZSB0ci5oZWFkZXIsICNteVRhYmxlIHRyOmhvdmVyIHtcclxuICAvKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRhYmxlIGhlYWRlciBhbmQgb24gaG92ZXIgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEzOSwgMzAsIDAuNTI3KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Admin/admin-coupons/admin-coupons.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Admin/admin-coupons/admin-coupons.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCouponsComponent", function() { return AdminCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/coupons.service */ "./src/app/services/coupons.service.ts");




let AdminCouponsComponent = class AdminCouponsComponent {
    constructor(activeRoute, couponService) {
        this.activeRoute = activeRoute;
        this.couponService = couponService;
    }
    ngOnInit() {
        this.getCoupons();
    }
    getCoupons() {
        let obsOfCoupon = this.couponService.getAllCoupons();
        obsOfCoupon.subscribe(arr => {
            this.coupons = arr;
            this.findedCoupons = [];
            for (const c of this.coupons) {
                this.findedCoupons.push(c);
            }
        }, err => {
            alert(err.error.message);
        });
    }
    deleteCoupon(id) {
        var isDelete = confirm("Are you sure that you want to remove coupon?");
        if (isDelete) {
            this.couponService.deleteCoupon(id, localStorage.getItem("token")).subscribe(msg => {
                this.ngOnInit();
            }, err => {
                let obj = JSON.parse(err.error);
                alert(obj.message);
            });
        }
    }
    findAdminCouponById(id) {
        this.couponService.getAdminCouponById(id).subscribe(c => {
            this.coupon = c;
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    applyFilter(event) {
        let q = event.target.value;
        let arr = this.coupons.filter((c) => {
            return c.title.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCoupons = arr;
    }
    applyFilterComapny(event) {
        let q = event.target.value;
        let arr = this.coupons.filter((c) => {
            return c.companyName.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCoupons = arr;
    }
};
AdminCouponsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] }
];
AdminCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-coupons/admin-coupons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-coupons.component.css */ "./src/app/Admin/admin-coupons/admin-coupons.component.css")).default]
    })
], AdminCouponsComponent);



/***/ }),

/***/ "./src/app/Admin/admin-customers/admin-customers.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Admin/admin-customers/admin-customers.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    height: 100vh;\r\n    /* overflow: scroll; */\r\n  }\r\n  \r\n  table {\r\n    text-align: center;\r\n    margin: auto;\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n  \r\n  tr, td, th {\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n  \r\n  #myInput {\r\n    background-image: url('/css/searchicon.png');\r\n    /* Add a search icon to input */\r\n    background-position: 10px 12px;\r\n    /* Position the search icon */\r\n    background-repeat: no-repeat;\r\n    /* Do not repeat the icon image */\r\n    width: 20%;\r\n  \r\n    /* Full-width */\r\n    font-size: 16px;\r\n    /* Increase font-size */\r\n    padding: 12px 20px 12px 40px;\r\n    /* Add some padding */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    margin-bottom: 10px;\r\n    margin-left: 15px;\r\n    /* Add some space below the input */\r\n  }\r\n  \r\n  #myTable {\r\n    background-color: white;\r\n    border-collapse: collapse;\r\n    /* Collapse borders */\r\n    width: 85%;\r\n    /* Full-width */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    font-size: 18px;\r\n    /* Increase font-size */\r\n  }\r\n  \r\n  #myTable th, #myTable td {\r\n    text-align: left;\r\n    /* Left-align text */\r\n    padding: 12px;\r\n    /* Add padding */\r\n  }\r\n  \r\n  #myTable tr {\r\n    /* Add a bottom border to all table rows */\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  #myTable tr.header, #myTable tr:hover {\r\n    /* Add a grey background color to the table header and on hover */\r\n    background-color: rgba(8, 139, 30, 0.527);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vYWRtaW4tY3VzdG9tZXJzL2FkbWluLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsNENBQTRDO0lBQzVDLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsVUFBVTs7SUFFVixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxpRUFBaUU7SUFDakUseUNBQXlDO0VBQzNDIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vYWRtaW4tY3VzdG9tZXJzL2FkbWluLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IHNvbGlkIHJnYigyMjQsIDkyLCA5Mik7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLCB0ZCwgdGgge1xyXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMjI0LCA5MiwgOTIpO1xyXG4gIH1cclxuICBcclxuICAjbXlJbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9jc3Mvc2VhcmNoaWNvbi5wbmcnKTtcclxuICAgIC8qIEFkZCBhIHNlYXJjaCBpY29uIHRvIGlucHV0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEycHg7XHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgc2VhcmNoIGljb24gKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvKiBEbyBub3QgcmVwZWF0IHRoZSBpY29uIGltYWdlICovXHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIFxyXG4gICAgLyogRnVsbC13aWR0aCAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA0MHB4O1xyXG4gICAgLyogQWRkIHNvbWUgcGFkZGluZyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIC8qIEFkZCBhIGdyZXkgYm9yZGVyICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAvKiBBZGQgc29tZSBzcGFjZSBiZWxvdyB0aGUgaW5wdXQgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLyogQ29sbGFwc2UgYm9yZGVycyAqL1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRoLCAjbXlUYWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogTGVmdC1hbGlnbiB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgLyogQWRkIHBhZGRpbmcgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUgdHIge1xyXG4gICAgLyogQWRkIGEgYm90dG9tIGJvcmRlciB0byBhbGwgdGFibGUgcm93cyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRyLmhlYWRlciwgI215VGFibGUgdHI6aG92ZXIge1xyXG4gICAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0YWJsZSBoZWFkZXIgYW5kIG9uIGhvdmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEzOSwgMzAsIDAuNTI3KTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/Admin/admin-customers/admin-customers.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Admin/admin-customers/admin-customers.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustomersComponent", function() { return AdminCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AdminCustomersComponent = class AdminCustomersComponent {
    constructor(activeRoute, customerService) {
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.customerEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,]);
    }
    ;
    ngOnInit() {
        this.getCustomer();
    }
    getCustomer() {
        let obsOfCustomer = this.customerService.getAllCustomers(localStorage.getItem('token'));
        obsOfCustomer.subscribe(arr => {
            this.customers = arr;
            this.findedCustomers = [];
            for (const c of this.customers) {
                this.findedCustomers.push(c);
            }
        }, err => {
            alert(err.error.message);
        });
    }
    deleteCustomer(id) {
        var isDelete = confirm("Are you sure that you want to remove customer?");
        if (isDelete) {
            this.customerService.deleteCustomer(id, localStorage.getItem("token")).subscribe(msg => {
                this.ngOnInit();
            }, err => {
                let obj = JSON.parse(err.error);
                alert(obj.message);
            });
        }
    }
    myFunction() {
        this.customerService.findCustomerByEmail(this.customerEmail, localStorage.getItem("token")).subscribe(arr => {
            console.log("hhaa");
            this.customers = arr;
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    applyFilter(event) {
        let q = event.target.value;
        let arr = this.customers.filter((c) => {
            return c.firstName.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCustomers = arr;
    }
    applyFilterLastName(event) {
        let q = event.target.value;
        let arr = this.customers.filter((c) => {
            return c.lastName.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCustomers = arr;
    }
    applyFilterEmail(event) {
        let q = event.target.value;
        let arr = this.customers.filter((c) => {
            return c.email.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCustomers = arr;
    }
};
AdminCustomersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] }
];
AdminCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-customers/admin-customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-customers.component.css */ "./src/app/Admin/admin-customers/admin-customers.component.css")).default]
    })
], AdminCustomersComponent);



/***/ }),

/***/ "./src/app/Admin/admin-menu/admin-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Admin/admin-menu/admin-menu.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  height: 100%;\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  text-align: center;\r\n  \r\n  /* box-sizing: border-box; */\r\n  /* display: grid; */\r\n  /* grid-template-rows: 20% 80%;\r\n  grid-template-columns: repeat(12, 1fr); */\r\n}\r\n\r\n/* aside { */\r\n\r\n/* grid-column: span 1; */\r\n\r\n/* border: 1px solid black; */\r\n\r\n/* height: 40px;\r\n  bottom: 10px;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(221, 221, 221, 0);\r\n  overflow-x: hidden; */\r\n\r\n/* padding-top: 2px;  */\r\n\r\n/* } */\r\n\r\n/* Style the sidenav links and the dropdown button */\r\n\r\n/* .sidenav a, .dropdown-btn {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 23px;\r\n  color: #030303;\r\n  display: block;\r\n  border: none;\r\n  background: none;\r\n  width:100%;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  outline: none;\r\n} */\r\n\r\n/* On mouse-over */\r\n\r\n/* .sidenav a:hover, .dropdown-btn:hover {\r\n  color: rgb(29, 185, 55);\r\n}\r\n.dropdown-btn:hover {\r\n  \r\n  color: #f1f1f1;\r\n} */\r\n\r\n/* Main content */\r\n\r\n.main {\r\n  margin-left: 200px; /* Same as the width of the sidenav */\r\n  font-size: 20px; /* Increased text to enable scrolling */\r\n  padding: 0px 10px;\r\n  \r\n}\r\n\r\n/* Add an active class to the active dropdown button */\r\n\r\n.active {\r\n  background-color: green;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\r\n\r\n/* .dropdown-container {\r\n  display: none;\r\n  background-color: #262626;\r\n  padding-left: 8px;\r\n} */\r\n\r\n/* Optional: Style the caret down icon */\r\n\r\n/* .fa-caret-down {\r\n  float: right;\r\n  padding-right: 8px;\r\n} */\r\n\r\n/* background-color: rgba(207, 94, 94, 0.404); */\r\n\r\n/* grid-column: span 10; */\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  margin-bottom: 5px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: 1px solid #e7e7e7;\r\n  background-color: #f3f3f3;\r\n  \r\n}\r\n\r\nli {\r\n  float: left;\r\n  \r\n}\r\n\r\nli a {\r\n  display: block;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: rgb(0, 0, 0);\r\n  align-self: start;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\nli a.active {\r\n  color: white;\r\n  background-color: #4CAF50;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vYWRtaW4tbWVudS9hZG1pbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3SUFBd0k7RUFDeEksWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxrQkFBa0I7O0VBRWxCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkI7MkNBQ3lDO0FBQzNDOztBQUVBLFlBQVk7O0FBQ1YseUJBQXlCOztBQUN6Qiw2QkFBNkI7O0FBQzdCOzs7Ozt1QkFLcUI7O0FBQ3JCLHVCQUF1Qjs7QUFFekIsTUFBTTs7QUFFTixvREFBb0Q7O0FBQ3BEOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCxrQkFBa0I7O0FBQ2xCOzs7Ozs7R0FNRzs7QUFDSCxpQkFBaUI7O0FBQ2pCO0VBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0VBQ3pELGVBQWUsRUFBRSx1Q0FBdUM7RUFDeEQsaUJBQWlCOztBQUVuQjs7QUFFQSxzREFBc0Q7O0FBQ3REO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSx3SkFBd0o7O0FBQ3hKOzs7O0dBSUc7O0FBRUgsd0NBQXdDOztBQUN4Qzs7O0dBR0c7O0FBSUQsZ0RBQWdEOztBQUNoRCwwQkFBMEI7O0FBRTVCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0lBQXdJO0VBQ3hJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vYWRtaW4tbWVudS9hZG1pbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXHJcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cclxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7ICovXHJcbn1cclxuXHJcbi8qIGFzaWRlIHsgKi9cclxuICAvKiBncmlkLWNvbHVtbjogc3BhbiAxOyAqL1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIC8qIGhlaWdodDogNDBweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbiAgLyogcGFkZGluZy10b3A6IDJweDsgICovXHJcbiAgIFxyXG4vKiB9ICovXHJcblxyXG4vKiBTdHlsZSB0aGUgc2lkZW5hdiBsaW5rcyBhbmQgdGhlIGRyb3Bkb3duIGJ1dHRvbiAqL1xyXG4vKiAuc2lkZW5hdiBhLCAuZHJvcGRvd24tYnRuIHtcclxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgY29sb3I6ICMwMzAzMDM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59ICovXHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyICovXHJcbi8qIC5zaWRlbmF2IGE6aG92ZXIsIC5kcm9wZG93bi1idG46aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjksIDE4NSwgNTUpO1xyXG59XHJcbi5kcm9wZG93bi1idG46aG92ZXIge1xyXG4gIFxyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59ICovXHJcbi8qIE1haW4gY29udGVudCAqL1xyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgLyogSW5jcmVhc2VkIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4vKiBBZGQgYW4gYWN0aXZlIGNsYXNzIHRvIHRoZSBhY3RpdmUgZHJvcGRvd24gYnV0dG9uICovXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRhaW5lciAoaGlkZGVuIGJ5IGRlZmF1bHQpLiBPcHRpb25hbDogYWRkIGEgbGlnaHRlciBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIGxlZnQgcGFkZGluZyB0byBjaGFuZ2UgdGhlIGRlc2lnbiBvZiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4vKiAuZHJvcGRvd24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0gKi9cclxuXHJcbi8qIE9wdGlvbmFsOiBTdHlsZSB0aGUgY2FyZXQgZG93biBpY29uICovXHJcbi8qIC5mYS1jYXJldC1kb3duIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59ICovXHJcblxyXG5cclxuXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpOyAqL1xyXG4gIC8qIGdyaWQtY29sdW1uOiBzcGFuIDEwOyAqL1xyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgXHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxubGkgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Admin/admin-menu/admin-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Admin/admin-menu/admin-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMenuComponent", function() { return AdminMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mode.service */ "./src/app/services/mode.service.ts");



let AdminMenuComponent = class AdminMenuComponent {
    constructor(modeService) {
        this.modeService = modeService;
    }
    ngOnInit() {
    }
};
AdminMenuComponent.ctorParameters = () => [
    { type: _services_mode_service__WEBPACK_IMPORTED_MODULE_2__["ModeService"] }
];
AdminMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/admin-menu/admin-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-menu.component.css */ "./src/app/Admin/admin-menu/admin-menu.component.css")).default]
    })
], AdminMenuComponent);



/***/ }),

/***/ "./src/app/Admin/company-add/company-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Admin/company-add/company-add.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nli{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nhr {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n \r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vY29tcGFueS1hZGQvY29tcGFueS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsR0FBRyxzQkFBc0I7O0FBRXpCLDRCQUE0Qjs7QUFDMUI7SUFDRSx3SUFBd0k7RUFDMUksVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0lBQXdJO0FBQzFJOztBQUNBOztFQUVFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0dBQWdHO0FBQ2xHOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdJQUF3STtBQUMxSTs7QUFFQTtJQUNJLHdJQUF3STtFQUMxSSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0lBQ0ksd0lBQXdJO0FBQzVJOztBQUVBLGdDQUFnQzs7QUFDaEM7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtJQUNJLHdJQUF3STtFQUMxSSxTQUFTO0FBQ1g7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLHdJQUF3STtJQUN4SSxrQkFBa0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBLDJEQUEyRDs7QUFDM0Q7O0VBRUUsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQSxzQ0FBc0M7O0FBQ3RDOztFQUVFLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0U7O0lBRUUsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9jb21wYW55LWFkZC9jb21wYW55LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5saXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5oci5zZXAtMiB7XHJcbiAgICBcclxuICBib3JkZXI6IDA7IFxyXG4gIGhlaWdodDogMXB4OyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMGYwZjAsIHJnYigyMDcsIDk0LCA5NCksICM1OWQ5NDEscmdiKDIwNywgOTQsIDk0KSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaHIge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuaDEscHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/Admin/company-add/company-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Admin/company-add/company-add.component.ts ***!
  \************************************************************/
/*! exports provided: CompanyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddComponent", function() { return CompanyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");






let CompanyAddComponent = class CompanyAddComponent {
    constructor(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_4__["Company"]();
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z].*$')]);
        this.companyEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]));
        this.companyPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]));
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: this.companyName,
            email: this.companyEmail,
            password: this.companyPassword
        });
    }
    ngOnInit() {
    }
    addCompany() {
        this.company.name = this.companyName.value;
        this.company.email = this.companyEmail.value;
        this.company.password = this.companyPassword.value;
        this.companyService.addAdminCompany(localStorage.getItem("token"), this.company).subscribe(createCompany => {
            alert("Company has been successfully Added.");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CompanyAddComponent.ctorParameters = () => [
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompanyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/company-add/company-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-add.component.css */ "./src/app/Admin/company-add/company-add.component.css")).default]
    })
], CompanyAddComponent);



/***/ }),

/***/ "./src/app/Admin/company-update/company-update.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Admin/company-update/company-update.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    text-align: center;\r\n  /* float: left; */\r\n  width: 30%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vY29tcGFueS11cGRhdGUvY29tcGFueS11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsR0FBRyxzQkFBc0I7O0FBRXpCLDRCQUE0Qjs7QUFDMUI7SUFDRSx3SUFBd0k7RUFDMUksVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0E7O0VBRUUsU0FBUztFQUNULFdBQVc7RUFDWCxnR0FBZ0c7QUFDbEc7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0lBQ0ksd0lBQXdJO0VBQzFJOztBQUVGO0lBQ0ksd0lBQXdJO0VBQzFJLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLFNBQVM7QUFDWDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksd0lBQXdJO0lBQ3hJLGtCQUFrQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsMkRBQTJEOztBQUMzRDtJQUNJLGtCQUFrQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFOztJQUVFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vY29tcGFueS11cGRhdGUvY29tcGFueS11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuaHIuc2VwLTIge1xyXG4gICAgXHJcbiAgYm9yZGVyOiAwOyBcclxuICBoZWlnaHQ6IDFweDsgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjBmMGYwLCByZ2IoMjA3LCA5NCwgOTQpLCAjNTlkOTQxLHJnYigyMDcsIDk0LCA5NCkpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuaHIge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuaDEscHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Admin/company-update/company-update.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Admin/company-update/company-update.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUpdateComponent", function() { return CompanyUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let CompanyUpdateComponent = class CompanyUpdateComponent {
    constructor(activeRoute, companyService, router) {
        this.activeRoute = activeRoute;
        this.companyService = companyService;
        this.router = router;
        this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_1__["Company"];
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.companyEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.companyPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.companyService.getCompanyById(this.id, localStorage.getItem('token')).subscribe(c => {
            this.company = c;
            this.companyName.setValue(c.name);
            this.companyEmail.setValue(c.email);
            this.companyPassword.setValue(c.password);
        }, err => {
            this.company = null;
        });
    }
    updateCompany() {
        this.company.name = this.companyName.value;
        this.company.email = this.companyEmail.value;
        this.company.password = this.companyPassword.value;
        this.companyService.updateAdminCompany(this.id, localStorage.getItem("token"), this.company).subscribe(c => {
            this.company = c;
            alert("Company with id :" + this.id + "updated !");
            this.router.navigate(['home']);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CompanyUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CompanyUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-company-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/company-update/company-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-update.component.css */ "./src/app/Admin/company-update/company-update.component.css")).default]
    })
], CompanyUpdateComponent);



/***/ }),

/***/ "./src/app/Admin/coupon-add/coupon-add.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Admin/coupon-add/coupon-add.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=date], input[type=number]  {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nli{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb,label{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nhr {\r\n  border: 2px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vY291cG9uLWFkZC9jb3Vwb24tYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLEdBQUcsc0JBQXNCOztBQUV6Qiw0QkFBNEI7O0FBQzFCO0lBQ0Usd0lBQXdJO0VBQzFJLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdJQUF3STtBQUMxSTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0lBQXdJO0FBQzFJOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFDQTtJQUNJLHdJQUF3STtBQUM1STs7QUFFQSxnQ0FBZ0M7O0FBQ2hDOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx3SUFBd0k7RUFDMUksU0FBUztBQUNYOztBQUVBOztFQUVFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0dBQWdHO0FBQ2xHOztBQUVBLHVDQUF1Qzs7QUFDdkM7SUFDSSx3SUFBd0k7SUFDeEksa0JBQWtCO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQSwyREFBMkQ7O0FBQzNEOztFQUVFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUEsc0NBQXNDOztBQUN0QztFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0U7O0lBRUUsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9jb3Vwb24tYWRkL2NvdXBvbi1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9ZGF0ZV0sIGlucHV0W3R5cGU9bnVtYmVyXSAge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbmxpe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmIsbGFiZWx7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuaDEscHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuaHIuc2VwLTIge1xyXG4gICAgXHJcbiAgYm9yZGVyOiAwOyBcclxuICBoZWlnaHQ6IDFweDsgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjBmMGYwLCByZ2IoMjA3LCA5NCwgOTQpLCAjNTlkOTQxLHJnYigyMDcsIDk0LCA5NCkpO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICBcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/Admin/coupon-add/coupon-add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Admin/coupon-add/coupon-add.component.ts ***!
  \**********************************************************/
/*! exports provided: CouponAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAddComponent", function() { return CouponAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let CouponAddComponent = class CouponAddComponent {
    constructor(couponService, router) {
        this.couponService = couponService;
        this.router = router;
        this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
        this.companyId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.coupontitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[A-Z].*$')]);
        this.couponstartDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.couponendDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.couponcategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.couponamount = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.coupondescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.couponprice = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(10),]);
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: this.companyId,
            title: this.coupontitle,
            startDate: this.couponstartDate,
            endDate: this.couponendDate,
            category: this.couponcategory,
            amount: this.couponamount,
            description: this.coupondescription,
            price: this.couponprice
        });
    }
    ngOnInit() {
    }
    addCoupon() {
        const value = this.companyId.value;
        this.coupon.title = this.coupontitle.value;
        this.coupon.startDate = this.couponstartDate.value;
        this.coupon.endDate = this.couponendDate.value;
        this.coupon.category = this.couponcategory.value;
        this.coupon.amount = this.couponamount.value;
        this.coupon.description = this.coupondescription.value;
        this.coupon.price = this.couponprice.value;
        this.couponService.addAdminCoupon(localStorage.getItem("token"), value, this.coupon).subscribe(createCoupon => {
            alert("Coupon has been successfully Added.");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CouponAddComponent.ctorParameters = () => [
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CouponAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupon-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/coupon-add/coupon-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupon-add.component.css */ "./src/app/Admin/coupon-add/coupon-add.component.css")).default]
    })
], CouponAddComponent);



/***/ }),

/***/ "./src/app/Admin/coupon-update/coupon-update.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Admin/coupon-update/coupon-update.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=date], input[type=number]  {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n  border: 2px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  /* float: left; */\r\n  width: 25%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh2{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vY291cG9uLXVwZGF0ZS9jb3Vwb24tdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLEdBQUcsc0JBQXNCOztBQUV6Qiw0QkFBNEI7O0FBQzFCO0lBQ0Usd0lBQXdJO0VBQzFJLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0dBQWdHO0FBQ2xHOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtJQUNJLHdJQUF3STtFQUMxSTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLFNBQVM7QUFDWDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksd0lBQXdJO0lBQ3hJLGtCQUFrQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsMkRBQTJEOztBQUMzRDs7RUFFRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFOztJQUVFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0lBQ0ksd0lBQXdJO0FBQzVJIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vY291cG9uLXVwZGF0ZS9jb3Vwb24tdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPW51bWJlcl0gIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5oci5zZXAtMiB7XHJcbiAgICBcclxuICBib3JkZXI6IDA7IFxyXG4gIGhlaWdodDogMXB4OyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMGYwZjAsIHJnYigyMDcsIDk0LCA5NCksICM1OWQ5NDEscmdiKDIwNywgOTQsIDk0KSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuaHIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5oMSxwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICBcclxuICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Admin/coupon-update/coupon-update.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Admin/coupon-update/coupon-update.component.ts ***!
  \****************************************************************/
/*! exports provided: CouponUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponUpdateComponent", function() { return CouponUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let CouponUpdateComponent = class CouponUpdateComponent {
    constructor(activeRoute, couponService, router) {
        this.activeRoute = activeRoute;
        this.couponService = couponService;
        this.router = router;
        this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"];
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.companyId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.coupontitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.couponstartDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.couponendDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.couponcategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.couponamount = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.coupondescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]);
        this.couponprice = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1),]);
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.couponService.getCouponByIdRest(this.id).subscribe(c => {
            this.coupon = c;
            this.companyName.setValue(c.companyName);
            this.coupontitle.setValue(c.title);
            this.couponstartDate.setValue(c.startDate);
            this.couponendDate.setValue(c.endDate);
            this.couponcategory.setValue(c.category);
            this.coupondescription.setValue(c.description);
            this.couponamount.setValue(c.amount);
            this.couponprice.setValue(c.price);
        }, err => {
            this.coupon = null;
        });
    }
    updateCoupon() {
        this.coupon.companyName = this.companyName.value;
        this.coupon.title = this.coupontitle.value;
        this.coupon.startDate = this.couponstartDate.value;
        this.coupon.endDate = this.couponendDate.value;
        this.coupon.category = this.couponcategory.value;
        this.coupon.amount = this.couponamount.value;
        this.coupon.description = this.coupondescription.value;
        this.coupon.price = this.couponprice.value;
        this.couponService.updateAdminCoupon(this.id, localStorage.getItem("token"), this.coupon).subscribe(c => {
            this.coupon = c;
            alert("Coupon with id :" + this.id + "updated !");
            this.router.navigate(['home']);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CouponUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__["CouponsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CouponUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupon-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/coupon-update/coupon-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupon-update.component.css */ "./src/app/Admin/coupon-update/coupon-update.component.css")).default]
    })
], CouponUpdateComponent);



/***/ }),

/***/ "./src/app/Company/company-menu/company-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Company/company-menu/company-menu.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  height: 100%;\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  text-align: center;\r\n  /* box-sizing: border-box; */\r\n  /* display: grid; */\r\n  /* grid-template-rows: 20% 80%;\r\n  grid-template-columns: repeat(12, 1fr); */\r\n}\r\n\r\n/* aside { */\r\n\r\n/* grid-column: span 1; */\r\n\r\n/* border: 1px solid black; */\r\n\r\n/* height: 40px;\r\n  bottom: 10px;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(221, 221, 221, 0);\r\n  overflow-x: hidden; */\r\n\r\n/* padding-top: 2px;  */\r\n\r\n/* } */\r\n\r\n/* Style the sidenav links and the dropdown button */\r\n\r\n/* .sidenav a, .dropdown-btn {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 23px;\r\n  color: #030303;\r\n  display: block;\r\n  border: none;\r\n  background: none;\r\n  width:100%;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  outline: none;\r\n} */\r\n\r\n/* On mouse-over */\r\n\r\n/* .sidenav a:hover, .dropdown-btn:hover {\r\n  color: rgb(29, 185, 55);\r\n}\r\n.dropdown-btn:hover {\r\n  \r\n  color: #f1f1f1;\r\n} */\r\n\r\n/* Main content */\r\n\r\n.main {\r\n  margin-left: 200px; /* Same as the width of the sidenav */\r\n  font-size: 20px; /* Increased text to enable scrolling */\r\n  padding: 0px 10px;\r\n}\r\n\r\n/* Add an active class to the active dropdown button */\r\n\r\n.active {\r\n  background-color: green;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\r\n\r\n/* .dropdown-container {\r\n  display: none;\r\n  background-color: #262626;\r\n  padding-left: 8px;\r\n} */\r\n\r\n/* Optional: Style the caret down icon */\r\n\r\n/* .fa-caret-down {\r\n  float: right;\r\n  padding-right: 8px;\r\n} */\r\n\r\n/* background-color: rgba(207, 94, 94, 0.404); */\r\n\r\n/* grid-column: span 10; */\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: 1px solid #e7e7e7;\r\n  background-color: #f3f3f3;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: rgb(0, 0, 0);\r\n  align-self: start;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\nli a.active {\r\n  color: white;\r\n  background-color: #4CAF50;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcGFueS9jb21wYW55LW1lbnUvY29tcGFueS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3SUFBd0k7RUFDeEksWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQjsyQ0FDeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDVix5QkFBeUI7O0FBQ3pCLDZCQUE2Qjs7QUFDN0I7Ozs7O3VCQUtxQjs7QUFDckIsdUJBQXVCOztBQUV6QixNQUFNOztBQUVOLG9EQUFvRDs7QUFDcEQ7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILGtCQUFrQjs7QUFDbEI7Ozs7OztHQU1HOztBQUNILGlCQUFpQjs7QUFDakI7RUFDRSxrQkFBa0IsRUFBRSxxQ0FBcUM7RUFDekQsZUFBZSxFQUFFLHVDQUF1QztFQUN4RCxpQkFBaUI7QUFDbkI7O0FBRUEsc0RBQXNEOztBQUN0RDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsd0pBQXdKOztBQUN4Sjs7OztHQUlHOztBQUVILHdDQUF3Qzs7QUFDeEM7OztHQUdHOztBQUlELGdEQUFnRDs7QUFDaEQsMEJBQTBCOztBQUU1QjtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdJQUF3STtFQUN4SSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBhbnkvY29tcGFueS1tZW51L2NvbXBhbnktbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXHJcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpOyAqL1xyXG59XHJcblxyXG4vKiBhc2lkZSB7ICovXHJcbiAgLyogZ3JpZC1jb2x1bW46IHNwYW4gMTsgKi9cclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAvKiBoZWlnaHQ6IDQwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMCk7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG4gIC8qIHBhZGRpbmctdG9wOiAycHg7ICAqL1xyXG4gICBcclxuLyogfSAqL1xyXG5cclxuLyogU3R5bGUgdGhlIHNpZGVuYXYgbGlua3MgYW5kIHRoZSBkcm9wZG93biBidXR0b24gKi9cclxuLyogLnNpZGVuYXYgYSwgLmRyb3Bkb3duLWJ0biB7XHJcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGNvbG9yOiAjMDMwMzAzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufSAqL1xyXG5cclxuLyogT24gbW91c2Utb3ZlciAqL1xyXG4vKiAuc2lkZW5hdiBhOmhvdmVyLCAuZHJvcGRvd24tYnRuOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDI5LCAxODUsIDU1KTtcclxufVxyXG4uZHJvcGRvd24tYnRuOmhvdmVyIHtcclxuICBcclxuICBjb2xvcjogI2YxZjFmMTtcclxufSAqL1xyXG4vKiBNYWluIGNvbnRlbnQgKi9cclxuLm1haW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGVuYXYgKi9cclxuICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlZCB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcgKi9cclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuLyogQWRkIGFuIGFjdGl2ZSBjbGFzcyB0byB0aGUgYWN0aXZlIGRyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBjb250YWluZXIgKGhpZGRlbiBieSBkZWZhdWx0KS4gT3B0aW9uYWw6IGFkZCBhIGxpZ2h0ZXIgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBsZWZ0IHBhZGRpbmcgdG8gY2hhbmdlIHRoZSBkZXNpZ24gb2YgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuLyogLmRyb3Bkb3duLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59ICovXHJcblxyXG4vKiBPcHRpb25hbDogU3R5bGUgdGhlIGNhcmV0IGRvd24gaWNvbiAqL1xyXG4vKiAuZmEtY2FyZXQtZG93biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufSAqL1xyXG5cclxuXHJcblxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCA5NCwgOTQsIDAuNDA0KTsgKi9cclxuICAvKiBncmlkLWNvbHVtbjogc3BhbiAxMDsgKi9cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxubGkgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Company/company-menu/company-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Company/company-menu/company-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMenuComponent", function() { return CompanyMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");



let CompanyMenuComponent = class CompanyMenuComponent {
    constructor(couponService) {
        this.couponService = couponService;
    }
    ngOnInit() {
    }
};
CompanyMenuComponent.ctorParameters = () => [
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_2__["CouponsService"] }
];
CompanyMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Company/company-menu/company-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-menu.component.css */ "./src/app/Company/company-menu/company-menu.component.css")).default]
    })
], CompanyMenuComponent);



/***/ }),

/***/ "./src/app/Company/company-update-profile/company-update-profile.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Company/company-update-profile/company-update-profile.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nli{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nhr.sep-2 {\r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    text-align: center;\r\n  /* float: left; */\r\n  width: 30%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n  height: 100vh;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n    \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcGFueS9jb21wYW55LXVwZGF0ZS1wcm9maWxlL2NvbXBhbnktdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsR0FBRyxzQkFBc0I7O0FBRXpCLDRCQUE0Qjs7QUFDMUI7SUFDRSx3SUFBd0k7RUFDMUksVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0lBQXdJO0FBQzFJOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxnR0FBZ0c7QUFDbEc7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0lBQ0ksd0lBQXdJO0VBQzFJOztBQUVGO0lBQ0ksd0lBQXdJO0VBQzFJLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLFNBQVM7QUFDWDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksd0lBQXdJO0lBQ3hJLGtCQUFrQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsMkRBQTJEOztBQUMzRDtJQUNJLGtCQUFrQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUdBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBhbnkvY29tcGFueS11cGRhdGUtcHJvZmlsZS9jb21wYW55LXVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbmxpe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhyLnNlcC0yIHtcclxuICBib3JkZXI6IDA7IFxyXG4gIGhlaWdodDogMXB4OyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMGYwZjAsIHJnYigyMDcsIDk0LCA5NCksICM1OWQ5NDEscmdiKDIwNywgOTQsIDk0KSk7XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5ie1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5ociB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5oMSxwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Company/company-update-profile/company-update-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Company/company-update-profile/company-update-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: CompanyUpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUpdateProfileComponent", function() { return CompanyUpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");






let CompanyUpdateProfileComponent = class CompanyUpdateProfileComponent {
    constructor(activeRoute, companyService, router) {
        this.activeRoute = activeRoute;
        this.companyService = companyService;
        this.router = router;
        this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z].*$')]);
        this.companyEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]));
        this.companyPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]));
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: this.companyName,
            email: this.companyEmail,
            password: this.companyPassword
        });
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.companyService.getMyCompany(localStorage.getItem("token")).subscribe(c => {
            this.company = c;
            this.companyName.setValue(c.name);
            this.companyEmail.setValue(c.email);
            this.companyPassword.setValue(c.password);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    updateCompany() {
        this.company.name = this.companyName.value;
        this.company.email = this.companyEmail.value;
        this.company.password = this.companyPassword.value;
        this.companyService.updateCompany(this.company, localStorage.getItem("token")).subscribe(c => {
            this.company = c;
            alert("Your User updated !");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CompanyUpdateProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CompanyUpdateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-update-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-update-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Company/company-update-profile/company-update-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-update-profile.component.css */ "./src/app/Company/company-update-profile/company-update-profile.component.css")).default]
    })
], CompanyUpdateProfileComponent);



/***/ }),

/***/ "./src/app/Customer/customer-menu/customer-menu.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Customer/customer-menu/customer-menu.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  height: 100%;\r\n  /* background-color: rgba(207, 94, 94, 0.404); */\r\n  text-align: center;\r\n  /* box-sizing: border-box; */\r\n  /* display: grid; */\r\n  /* grid-template-rows: 20% 80%;\r\n  grid-template-columns: repeat(12, 1fr); */\r\n}\r\n\r\n/* aside { */\r\n\r\n/* grid-column: span 1; */\r\n\r\n/* border: 1px solid black; */\r\n\r\n/* height: 40px;\r\n  bottom: 10px;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(221, 221, 221, 0);\r\n  overflow-x: hidden; */\r\n\r\n/* padding-top: 2px;  */\r\n\r\n/* } */\r\n\r\n/* Style the sidenav links and the dropdown button */\r\n\r\n/* .sidenav a, .dropdown-btn {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 23px;\r\n  color: #030303;\r\n  display: block;\r\n  border: none;\r\n  background: none;\r\n  width:100%;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  outline: none;\r\n} */\r\n\r\n/* On mouse-over */\r\n\r\n/* .sidenav a:hover, .dropdown-btn:hover {\r\n  color: rgb(29, 185, 55);\r\n}\r\n.dropdown-btn:hover {\r\n  \r\n  color: #f1f1f1;\r\n} */\r\n\r\n/* Main content */\r\n\r\n.main {\r\n  margin-left: 200px; /* Same as the width of the sidenav */\r\n  font-size: 20px; /* Increased text to enable scrolling */\r\n  padding: 0px 10px;\r\n}\r\n\r\n/* Add an active class to the active dropdown button */\r\n\r\n.active {\r\n  background-color: green;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\r\n\r\n/* .dropdown-container {\r\n  display: none;\r\n  background-color: #262626;\r\n  padding-left: 8px;\r\n} */\r\n\r\n/* Optional: Style the caret down icon */\r\n\r\n/* .fa-caret-down {\r\n  float: right;\r\n  padding-right: 8px;\r\n} */\r\n\r\n/* background-color: rgba(207, 94, 94, 0.404); */\r\n\r\n/* grid-column: span 10; */\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: 1px solid #e7e7e7;\r\n  background-color: #f3f3f3;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: rgb(0, 0, 0);\r\n  align-self: start;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\nli a.active {\r\n  color: white;\r\n  background-color: #4CAF50;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tZXIvY3VzdG9tZXItbWVudS9jdXN0b21lci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3SUFBd0k7RUFDeEksWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQjsyQ0FDeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDVix5QkFBeUI7O0FBQ3pCLDZCQUE2Qjs7QUFDN0I7Ozs7O3VCQUtxQjs7QUFDckIsdUJBQXVCOztBQUV6QixNQUFNOztBQUVOLG9EQUFvRDs7QUFDcEQ7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILGtCQUFrQjs7QUFDbEI7Ozs7OztHQU1HOztBQUNILGlCQUFpQjs7QUFDakI7RUFDRSxrQkFBa0IsRUFBRSxxQ0FBcUM7RUFDekQsZUFBZSxFQUFFLHVDQUF1QztFQUN4RCxpQkFBaUI7QUFDbkI7O0FBRUEsc0RBQXNEOztBQUN0RDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsd0pBQXdKOztBQUN4Sjs7OztHQUlHOztBQUVILHdDQUF3Qzs7QUFDeEM7OztHQUdHOztBQUlELGdEQUFnRDs7QUFDaEQsMEJBQTBCOztBQUU1QjtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdJQUF3STtFQUN4SSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL0N1c3RvbWVyL2N1c3RvbWVyLW1lbnUvY3VzdG9tZXItbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpOyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXHJcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpOyAqL1xyXG59XHJcblxyXG4vKiBhc2lkZSB7ICovXHJcbiAgLyogZ3JpZC1jb2x1bW46IHNwYW4gMTsgKi9cclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAvKiBoZWlnaHQ6IDQwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMCk7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG4gIC8qIHBhZGRpbmctdG9wOiAycHg7ICAqL1xyXG4gICBcclxuLyogfSAqL1xyXG5cclxuLyogU3R5bGUgdGhlIHNpZGVuYXYgbGlua3MgYW5kIHRoZSBkcm9wZG93biBidXR0b24gKi9cclxuLyogLnNpZGVuYXYgYSwgLmRyb3Bkb3duLWJ0biB7XHJcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGNvbG9yOiAjMDMwMzAzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufSAqL1xyXG5cclxuLyogT24gbW91c2Utb3ZlciAqL1xyXG4vKiAuc2lkZW5hdiBhOmhvdmVyLCAuZHJvcGRvd24tYnRuOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDI5LCAxODUsIDU1KTtcclxufVxyXG4uZHJvcGRvd24tYnRuOmhvdmVyIHtcclxuICBcclxuICBjb2xvcjogI2YxZjFmMTtcclxufSAqL1xyXG4vKiBNYWluIGNvbnRlbnQgKi9cclxuLm1haW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGVuYXYgKi9cclxuICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlZCB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcgKi9cclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuLyogQWRkIGFuIGFjdGl2ZSBjbGFzcyB0byB0aGUgYWN0aXZlIGRyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBjb250YWluZXIgKGhpZGRlbiBieSBkZWZhdWx0KS4gT3B0aW9uYWw6IGFkZCBhIGxpZ2h0ZXIgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBsZWZ0IHBhZGRpbmcgdG8gY2hhbmdlIHRoZSBkZXNpZ24gb2YgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuLyogLmRyb3Bkb3duLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59ICovXHJcblxyXG4vKiBPcHRpb25hbDogU3R5bGUgdGhlIGNhcmV0IGRvd24gaWNvbiAqL1xyXG4vKiAuZmEtY2FyZXQtZG93biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufSAqL1xyXG5cclxuXHJcblxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCA5NCwgOTQsIDAuNDA0KTsgKi9cclxuICAvKiBncmlkLWNvbHVtbjogc3BhbiAxMDsgKi9cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxubGkgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Customer/customer-menu/customer-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Customer/customer-menu/customer-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMenuComponent", function() { return CustomerMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerMenuComponent = class CustomerMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Customer/customer-menu/customer-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-menu.component.css */ "./src/app/Customer/customer-menu/customer-menu.component.css")).default]
    })
], CustomerMenuComponent);



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\nimg{\r\n  width: 400px;\r\n  height: 130px;\r\n}\r\narticle {\r\n  \r\n  background-color:white;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    max-width: 60%;\r\n    \r\n    margin: 0 auto;\r\n  }\r\np {\r\n    font-size: 20px;\r\n   }\r\nh1{\r\n     color: rgb(207, 94, 94);\r\n     font-size:x-large ;\r\n   }\r\nh3{\r\n     color: rgb(207, 94, 94);\r\n   }\r\nhr.sep-1 {\r\n    \r\n    position: relative;\r\n    display: block;\r\n    margin-top: 4em;\r\n    margin-bottom: 4em;\r\n    height: 2px;\r\n    border:none;\r\n    background: linear-gradient(to right, transparent 50%, #fff 50%), linear-gradient(to right, rgb(8, 139, 30), rgb(207, 94, 94));\r\n    background-size: 1.5rem, 100%;\r\n    transform: rotate(-5deg);\r\n    transform-origin: 50% 0%;\r\n  }\r\nhr.sep-1::after {\r\n    \r\n    font-family: 'FontAwesome';\r\n    content: '\\f061     \\f1cb     \\f060';\r\n    white-space: pre;\r\n    display: block;\r\n    position: absolute;\r\n    top: 1px;\r\n    left: 50%;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    transform: translate(-50%, -50%);\r\n    transform-origin: 50% 50%;  \r\n    background-image: linear-gradient(to right, rgb(8, 139, 30),rgb(207, 94, 94));\r\n    padding: 0 1em;\r\n    color: transparent;\r\n    \r\n  }\r\nhr.sep-1::before {\r\n    content: '';\r\n    \r\n    width: 5rem;\r\n    height: 1rem;\r\n    display: block;\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    transform-origin: 50% 50%;\r\n    background-color: white;\r\n  }\r\nhr.sep-2 {\r\n    \r\n    border: 0; \r\n    height: 1px; \r\n    background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n  }\r\n \r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7O0VBRUUsc0JBQXNCO0lBQ3BCLHdJQUF3STtJQUN4SSxjQUFjOztJQUVkLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGVBQWU7R0FDaEI7QUFDQTtLQUNFLHVCQUF1QjtLQUN2QixrQkFBa0I7R0FDcEI7QUFDQTtLQUNFLHVCQUF1QjtHQUN6QjtBQUNEOztJQUVFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLDhIQUE4SDtJQUM5SCw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHdCQUF3QjtFQUMxQjtBQUVBOztJQUVFLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsNkVBQTZFO0lBQzdFLGNBQWM7SUFDZCxrQkFBa0I7O0VBRXBCO0FBQ0E7SUFDRSxXQUFXOztJQUVYLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qix1QkFBdUI7RUFDekI7QUFFQTs7SUFFRSxTQUFTO0lBQ1QsV0FBVztJQUNYLGdHQUFnRztFQUNsRyIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuYXJ0aWNsZSB7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICB9XHJcbiAgIGgxe1xyXG4gICAgIGNvbG9yOiByZ2IoMjA3LCA5NCwgOTQpO1xyXG4gICAgIGZvbnQtc2l6ZTp4LWxhcmdlIDtcclxuICAgfVxyXG4gICBoM3tcclxuICAgICBjb2xvcjogcmdiKDIwNywgOTQsIDk0KTtcclxuICAgfVxyXG4gIGhyLnNlcC0xIHtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCA1MCUsICNmZmYgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoOCwgMTM5LCAzMCksIHJnYigyMDcsIDk0LCA5NCkpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW0sIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGhyLnNlcC0xOjphZnRlciB7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG4gICAgY29udGVudDogJ1xcZjA2MSAgICAgXFxmMWNiICAgICBcXGYwNjAnO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlOyAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig4LCAxMzksIDMwKSxyZ2IoMjA3LCA5NCwgOTQpKTtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgfVxyXG4gIGhyLnNlcC0xOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaHIuc2VwLTIge1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDA7IFxyXG4gICAgaGVpZ2h0OiAxcHg7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjBmMGYwLCByZ2IoMjA3LCA5NCwgOTQpLCAjNTlkOTQxLHJnYigyMDcsIDk0LCA5NCkpO1xyXG4gIH1cclxuIFxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let AboutComponent = class AboutComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle("About Us");
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/admin/update-admin/update-admin.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/update-admin/update-admin.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nli{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    text-align: center;\r\n  /* float: left; */\r\n  width: 30%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n  height: 65vh;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n    \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXBkYXRlLWFkbWluL3VwZGF0ZS1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLHNCQUFzQjs7QUFFekIsNEJBQTRCOztBQUMxQjtJQUNFLHdJQUF3STtFQUMxSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3SUFBd0k7QUFDMUk7O0FBQ0E7O0VBRUUsU0FBUztFQUNULFdBQVc7RUFDWCxnR0FBZ0c7QUFDbEc7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0lBQ0ksd0lBQXdJO0VBQzFJOztBQUVGO0lBQ0ksd0lBQXdJO0VBQzFJLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLFNBQVM7QUFDWDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksd0lBQXdJO0lBQ3hJLGtCQUFrQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsMkRBQTJEOztBQUMzRDtJQUNJLGtCQUFrQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUdBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VwZGF0ZS1hZG1pbi91cGRhdGUtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmxpe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhyLnNlcC0yIHtcclxuICAgIFxyXG4gIGJvcmRlcjogMDsgXHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwZjBmMCwgcmdiKDIwNywgOTQsIDk0KSwgIzU5ZDk0MSxyZ2IoMjA3LCA5NCwgOTQpKTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbmhyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmgxLHB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCA5NCwgOTQsIDAuNDA0KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogNjV2aDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/update-admin/update-admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/update-admin/update-admin.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdminComponent", function() { return UpdateAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/admin */ "./src/app/models/admin.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateAdminComponent = class UpdateAdminComponent {
    constructor(activeRoute, adminService, router) {
        this.activeRoute = activeRoute;
        this.adminService = adminService;
        this.router = router;
        this.admin = new src_app_models_admin__WEBPACK_IMPORTED_MODULE_2__["Admin"]();
        this.adminEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]));
        this.adminPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]));
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: this.adminEmail,
            password: this.adminPassword
        });
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.adminService.getMyAdmin(localStorage.getItem("token")).subscribe(c => {
            this.admin = c;
            this.adminEmail.setValue(c.email);
            this.adminPassword.setValue(c.password);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    updateAdmin() {
        this.admin.email = this.adminEmail.value;
        this.admin.password = this.adminPassword.value;
        this.adminService.updateAdmin(this.admin, localStorage.getItem("token")).subscribe(c => {
            this.admin = c;
            alert("Your User updated !");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
UpdateAdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_4__["CouponsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdateAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-admin/update-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-admin.component.css */ "./src/app/admin/update-admin/update-admin.component.css")).default]
    })
], UpdateAdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _design_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./design/home/home.component */ "./src/app/design/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _coupon_details_coupon_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coupon-details/coupon-details.component */ "./src/app/coupon-details/coupon-details.component.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _Admin_coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Admin/coupon-add/coupon-add.component */ "./src/app/Admin/coupon-add/coupon-add.component.ts");
/* harmony import */ var _Admin_coupon_update_coupon_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Admin/coupon-update/coupon-update.component */ "./src/app/Admin/coupon-update/coupon-update.component.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/company-details/company-details.component.ts");
/* harmony import */ var _Admin_company_update_company_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Admin/company-update/company-update.component */ "./src/app/Admin/company-update/company-update.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-update/customer-update.component */ "./src/app/customer-update/customer-update.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/customer-add/customer-add.component.ts");
/* harmony import */ var _Admin_company_add_company_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Admin/company-add/company-add.component */ "./src/app/Admin/company-add/company-add.component.ts");
/* harmony import */ var _company_company_coupon_update_company_coupon_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company/company-coupon-update/company-coupon-update.component */ "./src/app/company/company-coupon-update/company-coupon-update.component.ts");
/* harmony import */ var _company_company_coupon_add_company_coupon_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./company/company-coupon-add/company-coupon-add.component */ "./src/app/company/company-coupon-add/company-coupon-add.component.ts");
/* harmony import */ var _Company_company_update_profile_company_update_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Company/company-update-profile/company-update-profile.component */ "./src/app/Company/company-update-profile/company-update-profile.component.ts");
/* harmony import */ var _login_cus_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/cus.service */ "./src/app/login/cus.service.ts");
/* harmony import */ var _login_comp_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/comp.service */ "./src/app/login/comp.service.ts");
/* harmony import */ var _login_adm_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/adm.service */ "./src/app/login/adm.service.ts");
/* harmony import */ var _customer_customer_update_profile_customer_update_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer/customer-update-profile/customer-update-profile.component */ "./src/app/customer/customer-update-profile/customer-update-profile.component.ts");
/* harmony import */ var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer/purchase-coupon/purchase-coupon.component */ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _customer_customer_private_coupons_customer_private_coupons_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customer/customer-private-coupons/customer-private-coupons.component */ "./src/app/customer/customer-private-coupons/customer-private-coupons.component.ts");
/* harmony import */ var _admin_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/update-admin/update-admin.component */ "./src/app/admin/update-admin/update-admin.component.ts");





























const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "coupon-details/:id", component: _coupon_details_coupon_details_component__WEBPACK_IMPORTED_MODULE_9__["CouponDetailsComponent"] },
    { path: "company-details/:id", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_13__["CompanyDetailsComponent"] },
    { path: "customer-details/:id", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_15__["CustomerDetailsComponent"] },
    { path: "admin/add-coupon", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _Admin_coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_11__["CouponAddComponent"] },
    { path: "admin/edit-coupon/:id", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _Admin_coupon_update_coupon_update_component__WEBPACK_IMPORTED_MODULE_12__["CouponUpdateComponent"] },
    { path: "admin/edit-company/:id", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _Admin_company_update_company_update_component__WEBPACK_IMPORTED_MODULE_14__["CompanyUpdateComponent"] },
    { path: "admin/edit-customer/:id", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_16__["CustomerUpdateComponent"] },
    { path: "admin/add-company", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _Admin_company_add_company_add_component__WEBPACK_IMPORTED_MODULE_18__["CompanyAddComponent"] },
    { path: "admin/add-customer", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_17__["CustomerAddComponent"] },
    { path: "admin/update", canActivate: [_login_adm_service__WEBPACK_IMPORTED_MODULE_24__["AdmService"]], component: _admin_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_28__["UpdateAdminComponent"] },
    { path: "compnay/company-coupon-update/:id", canActivate: [_login_comp_service__WEBPACK_IMPORTED_MODULE_23__["CompService"]], component: _company_company_coupon_update_company_coupon_update_component__WEBPACK_IMPORTED_MODULE_19__["CompanyCouponUpdateComponent"] },
    { path: "company/add-coupon", canActivate: [_login_comp_service__WEBPACK_IMPORTED_MODULE_23__["CompService"]], component: _company_company_coupon_add_company_coupon_add_component__WEBPACK_IMPORTED_MODULE_20__["CompanyCouponAddComponent"] },
    { path: "company/update", canActivate: [_login_comp_service__WEBPACK_IMPORTED_MODULE_23__["CompService"]], component: _Company_company_update_profile_company_update_profile_component__WEBPACK_IMPORTED_MODULE_21__["CompanyUpdateProfileComponent"] },
    { path: "customer/update", canActivate: [_login_cus_service__WEBPACK_IMPORTED_MODULE_22__["CusService"]], component: _customer_customer_update_profile_customer_update_profile_component__WEBPACK_IMPORTED_MODULE_25__["CustomerUpdateProfileComponent"] },
    { path: "customer/coupons", canActivate: [_login_cus_service__WEBPACK_IMPORTED_MODULE_22__["CusService"]], component: _customer_customer_private_coupons_customer_private_coupons_component__WEBPACK_IMPORTED_MODULE_27__["CustomerPrivateCouponsComponent"] },
    { path: "customer/purchase-coupon/:id", canActivate: [_login_cus_service__WEBPACK_IMPORTED_MODULE_22__["CusService"]], component: _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_26__["PurchaseCouponComponent"] },
    { path: "home", canActivate: [_login_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]], component: _design_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: "deals", component: _deals_deals_component__WEBPACK_IMPORTED_MODULE_7__["DealsComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CouponSystem';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _design_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design/header/header.component */ "./src/app/design/header/header.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _design_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./design/footer/footer.component */ "./src/app/design/footer/footer.component.ts");
/* harmony import */ var _design_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./design/home/home.component */ "./src/app/design/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Admin_admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Admin/admin-menu/admin-menu.component */ "./src/app/Admin/admin-menu/admin-menu.component.ts");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/root/root.component */ "./src/app/components/root/root.component.ts");
/* harmony import */ var _coupon_details_coupon_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./coupon-details/coupon-details.component */ "./src/app/coupon-details/coupon-details.component.ts");
/* harmony import */ var _Admin_admin_coupons_admin_coupons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Admin/admin-coupons/admin-coupons.component */ "./src/app/Admin/admin-coupons/admin-coupons.component.ts");
/* harmony import */ var _Admin_coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Admin/coupon-add/coupon-add.component */ "./src/app/Admin/coupon-add/coupon-add.component.ts");
/* harmony import */ var _Admin_coupon_update_coupon_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Admin/coupon-update/coupon-update.component */ "./src/app/Admin/coupon-update/coupon-update.component.ts");
/* harmony import */ var _Admin_admin_companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Admin/admin-companies/admin-companies.component */ "./src/app/Admin/admin-companies/admin-companies.component.ts");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./company-details/company-details.component */ "./src/app/company-details/company-details.component.ts");
/* harmony import */ var _Admin_company_update_company_update_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Admin/company-update/company-update.component */ "./src/app/Admin/company-update/company-update.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./customer-update/customer-update.component */ "./src/app/customer-update/customer-update.component.ts");
/* harmony import */ var _Admin_company_add_company_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Admin/company-add/company-add.component */ "./src/app/Admin/company-add/company-add.component.ts");
/* harmony import */ var _Admin_admin_customers_admin_customers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Admin/admin-customers/admin-customers.component */ "./src/app/Admin/admin-customers/admin-customers.component.ts");
/* harmony import */ var _Company_company_menu_company_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Company/company-menu/company-menu.component */ "./src/app/Company/company-menu/company-menu.component.ts");
/* harmony import */ var _company_company_coupons_company_coupons_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./company/company-coupons/company-coupons.component */ "./src/app/company/company-coupons/company-coupons.component.ts");
/* harmony import */ var _company_company_coupon_update_company_coupon_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./company/company-coupon-update/company-coupon-update.component */ "./src/app/company/company-coupon-update/company-coupon-update.component.ts");
/* harmony import */ var _company_company_coupon_add_company_coupon_add_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./company/company-coupon-add/company-coupon-add.component */ "./src/app/company/company-coupon-add/company-coupon-add.component.ts");
/* harmony import */ var _Company_company_update_profile_company_update_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Company/company-update-profile/company-update-profile.component */ "./src/app/Company/company-update-profile/company-update-profile.component.ts");
/* harmony import */ var _customer_customer_update_profile_customer_update_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./customer/customer-update-profile/customer-update-profile.component */ "./src/app/customer/customer-update-profile/customer-update-profile.component.ts");
/* harmony import */ var _Customer_customer_menu_customer_menu_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Customer/customer-menu/customer-menu.component */ "./src/app/Customer/customer-menu/customer-menu.component.ts");
/* harmony import */ var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./customer/purchase-coupon/purchase-coupon.component */ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _customer_customer_private_coupons_customer_private_coupons_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./customer/customer-private-coupons/customer-private-coupons.component */ "./src/app/customer/customer-private-coupons/customer-private-coupons.component.ts");
/* harmony import */ var _admin_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/update-admin/update-admin.component */ "./src/app/admin/update-admin/update-admin.component.ts");









































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _design_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
            _design_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _design_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _deals_deals_component__WEBPACK_IMPORTED_MODULE_11__["DealsComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
            _coupon_details_coupon_details_component__WEBPACK_IMPORTED_MODULE_19__["CouponDetailsComponent"],
            _Admin_admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_17__["AdminMenuComponent"],
            _Company_company_menu_company_menu_component__WEBPACK_IMPORTED_MODULE_31__["CompanyMenuComponent"],
            _Customer_customer_menu_customer_menu_component__WEBPACK_IMPORTED_MODULE_37__["CustomerMenuComponent"],
            _components_root_root_component__WEBPACK_IMPORTED_MODULE_18__["RootComponent"],
            _Admin_admin_coupons_admin_coupons_component__WEBPACK_IMPORTED_MODULE_20__["AdminCouponsComponent"],
            _Admin_coupon_update_coupon_update_component__WEBPACK_IMPORTED_MODULE_22__["CouponUpdateComponent"],
            _Admin_coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_21__["CouponAddComponent"],
            _Admin_admin_companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_23__["AdminCompaniesComponent"],
            _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_24__["CompanyDetailsComponent"],
            _Admin_company_update_company_update_component__WEBPACK_IMPORTED_MODULE_25__["CompanyUpdateComponent"],
            _Admin_company_add_company_add_component__WEBPACK_IMPORTED_MODULE_29__["CompanyAddComponent"],
            _Admin_admin_customers_admin_customers_component__WEBPACK_IMPORTED_MODULE_30__["AdminCustomersComponent"],
            _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_26__["CustomerDetailsComponent"],
            _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_27__["CustomerAddComponent"],
            _customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_28__["CustomerUpdateComponent"],
            _company_company_coupons_company_coupons_component__WEBPACK_IMPORTED_MODULE_32__["CompanyCouponsComponent"],
            _company_company_coupon_update_company_coupon_update_component__WEBPACK_IMPORTED_MODULE_33__["CompanyCouponUpdateComponent"],
            _company_company_coupon_add_company_coupon_add_component__WEBPACK_IMPORTED_MODULE_34__["CompanyCouponAddComponent"],
            _Company_company_update_profile_company_update_profile_component__WEBPACK_IMPORTED_MODULE_35__["CompanyUpdateProfileComponent"],
            _customer_customer_update_profile_customer_update_profile_component__WEBPACK_IMPORTED_MODULE_36__["CustomerUpdateProfileComponent"],
            _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_38__["PurchaseCouponComponent"],
            _customer_customer_private_coupons_customer_private_coupons_component__WEBPACK_IMPORTED_MODULE_39__["CustomerPrivateCouponsComponent"],
            _admin_update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_40__["UpdateAdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        ],
        providers: [_deals_deals_component__WEBPACK_IMPORTED_MODULE_11__["DealsComponent"]],
        bootstrap: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company-details/company-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company-details/company-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".con{\r\n    background-color: rgba(207, 94, 94, 0.404);\r\n    padding: 16px;\r\n}\r\np,h4{\r\n    margin-top: 1px;\r\n    margin-bottom: 1.5px;\r\n}\r\n.card {\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 400px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    left: 150px;\r\n\r\n  }\r\n.price {\r\n    color: grey;\r\n    font-size: 22px;\r\n  }\r\n.card button {\r\n    border: none;\r\n    outline: 0;\r\n    padding: 12px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n.card button:hover {\r\n    opacity: 0.7;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1kZXRhaWxzL2NvbXBhbnktZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3SUFBd0k7SUFDeEksV0FBVzs7RUFFYjtBQUdBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS1kZXRhaWxzL2NvbXBhbnktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCA5NCwgOTQsIDAuNDA0KTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxucCxoNHtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGxlZnQ6IDE1MHB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnByaWNlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/company-details/company-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company-details/company-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let CompanyDetailsComponent = class CompanyDetailsComponent {
    constructor(title, activeRoute, companyService) {
        this.title = title;
        this.activeRoute = activeRoute;
        this.companyService = companyService;
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.title.setTitle("Company Details");
        this.companyService.getCompanyById(this.id, localStorage.getItem("token")).subscribe(c => {
            this.company = c;
            console.log(this.company);
        }, err => {
            alert(err.error.message);
        });
    }
};
CompanyDetailsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"] }
];
CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-details/company-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-details.component.css */ "./src/app/company-details/company-details.component.css")).default]
    })
], CompanyDetailsComponent);



/***/ }),

/***/ "./src/app/company/company-coupon-add/company-coupon-add.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/company/company-coupon-add/company-coupon-add.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=date], input[type=number]  {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nli{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nhr {\r\n  border: 2px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\nhr.sep-2 {\r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jb21wYW55LWNvdXBvbi1hZGQvY29tcGFueS1jb3Vwb24tYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLEdBQUcsc0JBQXNCOztBQUV6Qiw0QkFBNEI7O0FBQzFCO0lBQ0Usd0lBQXdJO0VBQzFJLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdJQUF3STtBQUMxSTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0lBQ0ksd0lBQXdJO0FBQzVJOztBQUVBLGdDQUFnQzs7QUFDaEM7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtJQUNJLHdJQUF3STtFQUMxSSxTQUFTO0FBQ1g7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLHdJQUF3STtFQUMxSSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxnR0FBZ0c7QUFDbEc7O0FBRUEsMkRBQTJEOztBQUMzRDs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFOztJQUVFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wYW55LWNvdXBvbi1hZGQvY29tcGFueS1jb3Vwb24tYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPW51bWJlcl0gIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5saXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5oMSxwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5oci5zZXAtMiB7XHJcbiAgYm9yZGVyOiAwOyBcclxuICBoZWlnaHQ6IDFweDsgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjBmMGYwLCByZ2IoMjA3LCA5NCwgOTQpLCAjNTlkOTQxLHJnYigyMDcsIDk0LCA5NCkpO1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICBcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/company/company-coupon-add/company-coupon-add.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/company/company-coupon-add/company-coupon-add.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompanyCouponAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCouponAddComponent", function() { return CompanyCouponAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");






let CompanyCouponAddComponent = class CompanyCouponAddComponent {
    constructor(couponService, router) {
        this.couponService = couponService;
        this.router = router;
        this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
        this.coupontitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z].*$')]);
        this.couponstartDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.couponendDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.couponcategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),]);
        this.couponamount = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),]);
        this.coupondescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.couponprice = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(10),]);
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: this.coupontitle,
            startDate: this.couponstartDate,
            endDate: this.couponendDate,
            category: this.couponcategory,
            amount: this.couponamount,
            description: this.coupondescription,
            price: this.couponprice
        });
    }
    ngOnInit() {
    }
    addCoupon() {
        this.coupon.title = this.coupontitle.value;
        this.coupon.startDate = this.couponstartDate.value;
        this.coupon.endDate = this.couponendDate.value;
        this.coupon.category = this.couponcategory.value;
        this.coupon.amount = this.couponamount.value;
        this.coupon.description = this.coupondescription.value;
        this.coupon.price = this.couponprice.value;
        this.couponService.addCompanyCoupon(localStorage.getItem("token"), this.coupon).subscribe(createCoupon => {
            alert("Coupon has been successfully Added.");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CompanyCouponAddComponent.ctorParameters = () => [
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__["CouponsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CompanyCouponAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-coupon-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coupon-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupon-add/company-coupon-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coupon-add.component.css */ "./src/app/company/company-coupon-add/company-coupon-add.component.css")).default]
    })
], CompanyCouponAddComponent);



/***/ }),

/***/ "./src/app/company/company-coupon-update/company-coupon-update.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/company/company-coupon-update/company-coupon-update.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=date], input[type=number]  {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n  border: 2px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  /* float: left; */\r\n  width: 25%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh2{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jb21wYW55LWNvdXBvbi11cGRhdGUvY29tcGFueS1jb3Vwb24tdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLEdBQUcsc0JBQXNCOztBQUV6Qiw0QkFBNEI7O0FBQzFCO0lBQ0Usd0lBQXdJO0VBQzFJLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0dBQWdHO0FBQ2xHOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtJQUNJLHdJQUF3STtFQUMxSTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLFNBQVM7QUFDWDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksd0lBQXdJO0lBQ3hJLGtCQUFrQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsMkRBQTJEOztBQUMzRDs7RUFFRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFOztJQUVFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0lBQ0ksd0lBQXdJO0FBQzVJIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wYW55LWNvdXBvbi11cGRhdGUvY29tcGFueS1jb3Vwb24tdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPW51bWJlcl0gIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5oci5zZXAtMiB7XHJcbiAgICBcclxuICBib3JkZXI6IDA7IFxyXG4gIGhlaWdodDogMXB4OyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMGYwZjAsIHJnYigyMDcsIDk0LCA5NCksICM1OWQ5NDEscmdiKDIwNywgOTQsIDk0KSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuaHIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5oMSxwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICBcclxuICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/company/company-coupon-update/company-coupon-update.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/company/company-coupon-update/company-coupon-update.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CompanyCouponUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCouponUpdateComponent", function() { return CompanyCouponUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");






let CompanyCouponUpdateComponent = class CompanyCouponUpdateComponent {
    constructor(activeRoute, couponService, router) {
        this.activeRoute = activeRoute;
        this.couponService = couponService;
        this.router = router;
        this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"];
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.companyId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),]);
        this.coupontitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.couponstartDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.couponendDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.couponcategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),]);
        this.couponamount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),]);
        this.coupondescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.couponprice = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),]);
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.couponService.getCompanyCouponByIdRest(this.id, localStorage.getItem("token")).subscribe(c => {
            this.coupon = c;
            this.companyName.setValue(c.companyName);
            this.coupontitle.setValue(c.title);
            this.couponstartDate.setValue(c.startDate);
            this.couponendDate.setValue(c.endDate);
            this.couponcategory.setValue(c.category);
            this.coupondescription.setValue(c.description);
            this.couponamount.setValue(c.amount);
            this.couponprice.setValue(c.price);
            console.log(this.coupon);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
            this.router.navigate(['/home']);
        });
    }
    updateCoupon() {
        this.coupon.companyName = this.companyName.value;
        this.coupon.title = this.coupontitle.value;
        this.coupon.startDate = this.couponstartDate.value;
        this.coupon.endDate = this.couponendDate.value;
        this.coupon.category = this.couponcategory.value;
        this.coupon.amount = this.couponamount.value;
        this.coupon.description = this.coupondescription.value;
        this.coupon.price = this.couponprice.value;
        this.couponService.updateCompanyCoupon(this.id, localStorage.getItem("token"), this.coupon).subscribe(c => {
            this.coupon = c;
            alert("Coupon with id :" + this.id + "updated !");
            this.router.navigate(['/home']);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CompanyCouponUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__["CouponsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CompanyCouponUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-coupon-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coupon-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupon-update/company-coupon-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coupon-update.component.css */ "./src/app/company/company-coupon-update/company-coupon-update.component.css")).default]
    })
], CompanyCouponUpdateComponent);



/***/ }),

/***/ "./src/app/company/company-coupons/company-coupons.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/company/company-coupons/company-coupons.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    height: 100vh;\r\n    /* overflow: scroll; */\r\n  }\r\n  \r\n  table {\r\n    text-align: center;\r\n    margin: auto;\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n  \r\n  tr, td, th {\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n  \r\n  #myInput {\r\n    background-image: url('/css/searchicon.png');\r\n    /* Add a search icon to input */\r\n    background-position: 10px 12px;\r\n    /* Position the search icon */\r\n    background-repeat: no-repeat;\r\n    /* Do not repeat the icon image */\r\n    width: 25%;\r\n    /* Full-width */\r\n    font-size: 16px;\r\n    /* Increase font-size */\r\n    padding: 12px 20px 12px 40px;\r\n    /* Add some padding */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    margin-bottom: 12px;\r\n    /* Add some space below the input */\r\n  }\r\n  \r\n  #myTable {\r\n    background-color: white;\r\n    border-collapse: collapse;\r\n    /* Collapse borders */\r\n    width: 85%;\r\n    /* Full-width */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    font-size: 18px;\r\n    /* Increase font-size */\r\n  }\r\n  \r\n  #myTable th, #myTable td {\r\n    text-align: left;\r\n    /* Left-align text */\r\n    padding: 12px;\r\n    /* Add padding */\r\n  }\r\n  \r\n  #myTable tr {\r\n    /* Add a bottom border to all table rows */\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  #myTable tr.header, #myTable tr:hover {\r\n    /* Add a grey background color to the table header and on hover */\r\n    background-color: rgba(8, 139, 30, 0.527);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jb21wYW55LWNvdXBvbnMvY29tcGFueS1jb3Vwb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxpRUFBaUU7SUFDakUseUNBQXlDO0VBQzNDIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wYW55LWNvdXBvbnMvY29tcGFueS1jb3Vwb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDIyNCwgOTIsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgdHIsIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIHJnYigyMjQsIDkyLCA5Mik7XHJcbiAgfVxyXG4gIFxyXG4gICNteUlucHV0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Nzcy9zZWFyY2hpY29uLnBuZycpO1xyXG4gICAgLyogQWRkIGEgc2VhcmNoIGljb24gdG8gaW5wdXQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTJweDtcclxuICAgIC8qIFBvc2l0aW9uIHRoZSBzZWFyY2ggaWNvbiAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8qIERvIG5vdCByZXBlYXQgdGhlIGljb24gaW1hZ2UgKi9cclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBGdWxsLXdpZHRoICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvKiBJbmNyZWFzZSBmb250LXNpemUgKi9cclxuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDQwcHg7XHJcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLyogQWRkIGEgZ3JleSBib3JkZXIgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAvKiBBZGQgc29tZSBzcGFjZSBiZWxvdyB0aGUgaW5wdXQgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLyogQ29sbGFwc2UgYm9yZGVycyAqL1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRoLCAjbXlUYWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogTGVmdC1hbGlnbiB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgLyogQWRkIHBhZGRpbmcgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUgdHIge1xyXG4gICAgLyogQWRkIGEgYm90dG9tIGJvcmRlciB0byBhbGwgdGFibGUgcm93cyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRyLmhlYWRlciwgI215VGFibGUgdHI6aG92ZXIge1xyXG4gICAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0YWJsZSBoZWFkZXIgYW5kIG9uIGhvdmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEzOSwgMzAsIDAuNTI3KTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/company/company-coupons/company-coupons.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/company/company-coupons/company-coupons.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCouponsComponent", function() { return CompanyCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");




let CompanyCouponsComponent = class CompanyCouponsComponent {
    constructor(activeRoute, couponService) {
        this.activeRoute = activeRoute;
        this.couponService = couponService;
    }
    ngOnInit() {
        this.getCoupons();
    }
    getCoupons() {
        let obsOfCoupon = this.couponService.getAllCompanyCoupons(localStorage.getItem("token"));
        obsOfCoupon.subscribe(arr => {
            this.coupons = arr;
            this.findedCoupons = [];
            for (const c of this.coupons) {
                this.findedCoupons.push(c);
            }
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    deleteCoupon(id) {
        var isDelete = confirm("Are you sure that you want to remove coupon?");
        if (isDelete) {
            this.couponService.deleteCompanyCoupon(id, localStorage.getItem("token")).subscribe(msg => {
                this.ngOnInit();
            }, err => {
                let obj = JSON.parse(err.error);
                alert(obj.message);
            });
        }
    }
    applyFilter(event) {
        let q = event.target.value;
        let arr = this.coupons.filter((c) => {
            return c.title.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCoupons = arr;
    }
};
CompanyCouponsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] }
];
CompanyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company-coupons/company-coupons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-coupons.component.css */ "./src/app/company/company-coupons/company-coupons.component.css")).default]
    })
], CompanyCouponsComponent);



/***/ }),

/***/ "./src/app/components/root/root.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/root/root.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mode.service */ "./src/app/services/mode.service.ts");



let RootComponent = class RootComponent {
    constructor(modeService) {
        this.modeService = modeService;
    }
    ngOnInit() {
    }
};
RootComponent.ctorParameters = () => [
    { type: src_app_services_mode_service__WEBPACK_IMPORTED_MODULE_2__["ModeService"] }
];
RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./root.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root/root.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./root.component.css */ "./src/app/components/root/root.component.css")).default]
    })
], RootComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*, *:before, *:after {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  span{\r\n      color:rgb(207, 94, 94);\r\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\n  body {\r\n    background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);\r\n    font-size: 12px;\r\n  }\r\n\r\n  body, button, input {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 1.4px;\r\n  }\r\n\r\n  .background {\r\n      background-color: rgba(207, 94, 94, 0.404);\r\n    display: flex;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .container {\r\n    flex: 0 1 700px;\r\n    margin: auto;\r\n    padding: 10px;\r\n  }\r\n\r\n  .screen {\r\n    position: relative;\r\n    background:  rgb(62, 85, 66);\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .screen:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20px;\r\n    right: 20px;\r\n    bottom: 0;\r\n    border-radius: 15px;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);\r\n    z-index: -1;\r\n  }\r\n\r\n  .screen-header {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    background: rgba(102, 216, 121, 0.541);\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n  }\r\n\r\n  .screen-header-left {\r\n    margin-right: auto;\r\n  }\r\n\r\n  .screen-header-button {\r\n    display: inline-block;\r\n    width: 8px;\r\n    height: 8px;\r\n    margin-right: 3px;\r\n    border-radius: 8px;\r\n    background: white;\r\n  }\r\n\r\n  .screen-header-button.close {\r\n    background: rgb(207, 94, 94);\r\n  }\r\n\r\n  .screen-header-button.maximize {\r\n    background: #e8e925;\r\n  }\r\n\r\n  .screen-header-button.minimize {\r\n    background: rgb(47, 139, 62);\r\n  }\r\n\r\n  .screen-header-right {\r\n    display: flex;\r\n  }\r\n\r\n  .screen-header-ellipsis {\r\n    width: 3px;\r\n    height: 3px;\r\n    margin-left: 2px;\r\n    border-radius: 8px;\r\n    background: #999;\r\n  }\r\n\r\n  .screen-body {\r\n    display: flex;\r\n  }\r\n\r\n  .screen-body-item {\r\n    flex: 1;\r\n    padding: 50px;\r\n  }\r\n\r\n  .screen-body-item.left {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .app-title {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    color: rgb(47, 139, 62);\r\n    font-size: 26px;\r\n  }\r\n\r\n  .app-title:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: 77px;\r\n    bottom: -10px;\r\n    width: 80px;\r\n    height: 4px;\r\n    background: rgb(8, 139, 30);\r\n  }\r\n\r\n  .app-contact {\r\n    margin-top: auto;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 15px;\r\n    color: rgb(206, 201, 201);\r\n  }\r\n\r\n  .app-form-group {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .app-form-group.message {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .app-form-group.buttons {\r\n    margin-bottom: 0;\r\n    text-align: right;\r\n  }\r\n\r\n  .app-form-control {\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #666;\r\n    color: #ddd;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    outline: none;\r\n    transition: border-color .2s;\r\n  }\r\n\r\n  .app-form-control::-webkit-input-placeholder {\r\n    color: #666;\r\n  }\r\n\r\n  .app-form-control::-moz-placeholder {\r\n    color: #666;\r\n  }\r\n\r\n  .app-form-control::-ms-input-placeholder {\r\n    color: #666;\r\n  }\r\n\r\n  .app-form-control::placeholder {\r\n    color: #666;\r\n  }\r\n\r\n  .app-form-control:focus {\r\n    border-bottom-color: #ddd;\r\n  }\r\n\r\n  .app-form-button {\r\n    background: none;\r\n    border: none;\r\n    color: rgb(207, 94, 94);\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n\r\n  .app-form-button:hover {\r\n    color:rgb(207, 94, 94);\r\n  }\r\n\r\n  @media screen and (max-width: 520px) {\r\n    .screen-body {\r\n      flex-direction: column;\r\n    }\r\n  \r\n    .screen-body-item.left {\r\n      margin-bottom: 30px;\r\n    }\r\n  \r\n    .app-title {\r\n      flex-direction: row;\r\n    }\r\n  \r\n    .app-title span {\r\n      margin-right: 12px;\r\n    }\r\n  \r\n    .app-title:after {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .screen-body {\r\n      padding: 40px;\r\n    }\r\n  \r\n    .screen-body-item {\r\n      padding: 0;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTtNQUNJLHNCQUFzQjtNQUN0Qix3SUFBd0k7RUFDNUk7O0VBRUE7SUFDRSwrREFBK0Q7SUFDL0QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztFQUVBO01BQ0ksMENBQTBDO0lBQzVDLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3SUFBd0k7SUFDeEksZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRkE7SUFDRSxXQUFXO0VBQ2I7O0VBRkE7SUFDRSxXQUFXO0VBQ2I7O0VBRkE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgc3BhbntcclxuICAgICAgY29sb3I6cmdiKDIwNywgOTQsIDk0KTtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYTFkNmYgMCUsICNlYjQ2NmIgMTAwJSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHksIGJ1dHRvbiwgaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDAgMSA3MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIHJnYig2MiwgODUsIDY2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAyMTYsIDEyMSwgMC41NDEpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWhlYWRlci1sZWZ0IHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1oZWFkZXItYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4taGVhZGVyLWJ1dHRvbi5jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA3LCA5NCwgOTQpO1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWhlYWRlci1idXR0b24ubWF4aW1pemUge1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZTkyNTtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1oZWFkZXItYnV0dG9uLm1pbmltaXplIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0NywgMTM5LCA2Mik7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4taGVhZGVyLXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4taGVhZGVyLWVsbGlwc2lzIHtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0ge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4tYm9keS1pdGVtLmxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogcmdiKDQ3LCAxMzksIDYyKTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC10aXRsZTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNzdweDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDgsIDEzOSwgMzApO1xyXG4gIH1cclxuICBcclxuICAuYXBwLWNvbnRhY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDIwNiwgMjAxLCAyMDEpO1xyXG4gIH1cclxuICBcclxuICAuYXBwLWZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1mb3JtLWdyb3VwLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1mb3JtLWdyb3VwLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuYXBwLWZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzO1xyXG4gIH1cclxuICBcclxuICAuYXBwLWZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtZm9ybS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMjA3LCA5NCwgOTQpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1mb3JtLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjpyZ2IoMjA3LCA5NCwgOTQpO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgLnNjcmVlbi1ib2R5IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICBcclxuICAgIC5zY3JlZW4tYm9keS1pdGVtLmxlZnQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFwcC10aXRsZSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXBwLXRpdGxlIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXBwLXRpdGxlOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zY3JlZW4tYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let ContactComponent = class ContactComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle("Contact");
    }
    submitForm() {
        //send email to matanelbaz00@gmail.com
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/coupon-details/coupon-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/coupon-details/coupon-details.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".con{\r\n    background-color: rgba(207, 94, 94, 0.404);\r\n    padding: 16px;\r\n}\r\np,h4{\r\n    margin-top: 1px;\r\n    margin-bottom: 1.5px;\r\n}\r\n.card {\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 400px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    left: 150px;\r\n\r\n  }\r\n.buy{\r\n    border: none;\r\n    outline: 0;\r\n    padding: 12px;\r\n    color: white;\r\n    background-color: #4CAF50;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n    \r\n  }\r\n.price {\r\n    color: grey;\r\n    font-size: 22px;\r\n  }\r\n.but {\r\n    border: none;\r\n    outline: 0;\r\n    padding: 12px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n.card button:hover {\r\n    opacity: 0.7;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9uLWRldGFpbHMvY291cG9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0lBQXdJO0lBQ3hJLFdBQVc7O0VBRWI7QUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTs7RUFFakI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbi1kZXRhaWxzL2NvdXBvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5wLGg0e1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGVmdDogMTUwcHg7XHJcblxyXG4gIH1cclxuICBcclxuICAuYnV5e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBcclxuICB9XHJcbiAgLnByaWNlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBidXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/coupon-details/coupon-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/coupon-details/coupon-details.component.ts ***!
  \************************************************************/
/*! exports provided: CouponDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponDetailsComponent", function() { return CouponDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");
/* harmony import */ var _services_mode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mode.service */ "./src/app/services/mode.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let CouponDetailsComponent = class CouponDetailsComponent {
    constructor(title, activeRoute, couponService, modeService) {
        this.title = title;
        this.activeRoute = activeRoute;
        this.couponService = couponService;
        this.modeService = modeService;
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.title.setTitle("Coupon Details");
        if (localStorage.getItem("type") == '1') {
            this.clientType = 1;
        }
        this.couponService.getCouponByIdRest(this.id).subscribe(c => {
            this.coupon = c;
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CouponDetailsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] },
    { type: _services_mode_service__WEBPACK_IMPORTED_MODULE_4__["ModeService"] }
];
CouponDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupon-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon-details/coupon-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupon-details.component.css */ "./src/app/coupon-details/coupon-details.component.css")).default]
    })
], CouponDetailsComponent);



/***/ }),

/***/ "./src/app/customer-add/customer-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/customer-add/customer-add.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nli{\r\n  text-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\nb{\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nhr {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  border: 2px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLHNCQUFzQjs7QUFFekIsNEJBQTRCOztBQUMxQjtJQUNFLHdJQUF3STtFQUMxSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3SUFBd0k7QUFDMUk7O0FBRUE7O0VBRUUsU0FBUztFQUNULFdBQVc7RUFDWCxnR0FBZ0c7QUFDbEc7O0FBQ0E7RUFDRSx3SUFBd0k7QUFDMUk7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSx3SUFBd0k7QUFDNUk7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksd0lBQXdJO0VBQzFJLFNBQVM7QUFDWDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksd0lBQXdJO0lBQ3hJLGtCQUFrQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsMkRBQTJEOztBQUMzRDs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBLHNDQUFzQzs7QUFDdEM7RUFDRSwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFOztJQUVFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxubGl7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhyLnNlcC0yIHtcclxuICAgIFxyXG4gIGJvcmRlcjogMDsgXHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwZjBmMCwgcmdiKDIwNywgOTQsIDk0KSwgIzU5ZDk0MSxyZ2IoMjA3LCA5NCwgOTQpKTtcclxufVxyXG5ie1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmgxLHB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgIFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xyXG4gICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/customer-add/customer-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-add/customer-add.component.ts ***!
  \********************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CustomerAddComponent = class CustomerAddComponent {
    constructor(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.customerFirstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z].*$')]);
        this.customerLastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z].*$')]);
        this.customerEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]));
        this.customerPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]));
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstname: this.customerFirstName,
            lastName: this.customerLastName,
            email: this.customerEmail,
            password: this.customerPassword
        });
    }
    ngOnInit() {
    }
    addCustomer() {
        this.customer.firstName = this.customerFirstName.value;
        this.customer.lastName = this.customerLastName.value;
        this.customer.email = this.customerEmail.value;
        this.customer.password = this.customerPassword.value;
        console.log(`
    customer first name:${this.customer.firstName}
    customer last name:${this.customer.lastName}
    customer start date:${this.customer.email}
    customer end date:${this.customer.password}
    `);
        this.customerService.addAdminCustomer(localStorage.getItem("token"), this.customer).subscribe(createCustomer => {
            alert("Customer has been successfully Added.");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CustomerAddComponent.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CustomerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-add/customer-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-add.component.css */ "./src/app/customer-add/customer-add.component.css")).default]
    })
], CustomerAddComponent);



/***/ }),

/***/ "./src/app/customer-details/customer-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".con{\r\n    background-color: rgba(207, 94, 94, 0.404);\r\n    padding: 16px;\r\n}\r\np,h4{\r\n    margin-top: 1px;\r\n    margin-bottom: 1.5px;\r\n}\r\n.card {\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 400px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    left: 150px;\r\n\r\n  }\r\n.price {\r\n    color: grey;\r\n    font-size: 22px;\r\n  }\r\n.card button {\r\n    border: none;\r\n    outline: 0;\r\n    padding: 12px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n.card button:hover {\r\n    opacity: 0.7;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHdJQUF3STtJQUN4SSxXQUFXOztFQUViO0FBR0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbnAsaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5wcmljZSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBidXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let CustomerDetailsComponent = class CustomerDetailsComponent {
    constructor(title, activeRoute, customerService) {
        this.title = title;
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.title.setTitle("Customer Details");
        this.customerService.getCustomerById(this.id, localStorage.getItem("token")).subscribe(c => {
            this.customer = c;
            console.log(this.customer);
        }, err => {
            alert(err.error.message);
        });
    }
};
CustomerDetailsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] }
];
CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-details/customer-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer-details/customer-details.component.css")).default]
    })
], CustomerDetailsComponent);



/***/ }),

/***/ "./src/app/customer-update/customer-update.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customer-update/customer-update.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=date], input[type=number]  {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nhr.sep-2 {\r\n    \r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n  border: 2px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    \r\n  /* float: left; */\r\n  width: 25%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n      \r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh2{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItdXBkYXRlL2N1c3RvbWVyLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLHNCQUFzQjs7QUFFekIsNEJBQTRCOztBQUMxQjtJQUNFLHdJQUF3STtFQUMxSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7O0VBRUUsU0FBUztFQUNULFdBQVc7RUFDWCxnR0FBZ0c7QUFDbEc7O0FBRUE7SUFDSSx3SUFBd0k7RUFDMUk7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0lBQ0ksd0lBQXdJO0FBQzVJOztBQUVBLGdDQUFnQzs7QUFDaEM7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtJQUNJLHdJQUF3STtFQUMxSSxTQUFTO0FBQ1g7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLHdJQUF3STtJQUN4SSxrQkFBa0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBLDJEQUEyRDs7QUFDM0Q7O0VBRUUsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQSxzQ0FBc0M7O0FBQ3RDO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7QUFDRjs7QUFDQTtJQUNJLHdJQUF3STtBQUM1SSIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLXVwZGF0ZS9jdXN0b21lci11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9ZGF0ZV0sIGlucHV0W3R5cGU9bnVtYmVyXSAge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmhyLnNlcC0yIHtcclxuICAgIFxyXG4gIGJvcmRlcjogMDsgXHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwZjBmMCwgcmdiKDIwNywgOTQsIDk0KSwgIzU5ZDk0MSxyZ2IoMjA3LCA5NCwgOTQpKTtcclxufVxyXG5cclxuYntcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5oMSxwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICBcclxuICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/customer-update/customer-update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-update/customer-update.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUpdateComponent", function() { return CustomerUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/customers.service */ "./src/app/services/customers.service.ts");






let CustomerUpdateComponent = class CustomerUpdateComponent {
    constructor(activeRoute, customerService, router) {
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.router = router;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"];
        this.customerFirstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.customerLastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.customerEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.customerPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.customerService.getCustomerById(this.id, localStorage.getItem('token')).subscribe(c => {
            this.customer = c;
            this.customerFirstName.setValue(c.firstName);
            this.customerLastName.setValue(c.lastName);
            this.customerEmail.setValue(c.email);
            this.customerPassword.setValue(c.password);
        }, err => {
            this.customer = null;
        });
    }
    updateCustomer() {
        this.customer.firstName = this.customerFirstName.value;
        this.customer.lastName = this.customerLastName.value;
        this.customer.email = this.customerEmail.value;
        this.customer.password = this.customerPassword.value;
        this.customerService.updateAdminCustomer(this.id, localStorage.getItem("token"), this.customer).subscribe(c => {
            this.customer = c;
            alert("Customer with id :" + this.id + "updated !");
            this.router.navigate(['home']);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CustomerUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CustomerUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-update/customer-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-update.component.css */ "./src/app/customer-update/customer-update.component.css")).default]
    })
], CustomerUpdateComponent);



/***/ }),

/***/ "./src/app/customer/customer-private-coupons/customer-private-coupons.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/customer/customer-private-coupons/customer-private-coupons.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    background-color:rgba(207, 94, 94, 0.404);\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\ndiv {\r\n    height: 100vh;\r\n    /* overflow: scroll; */\r\n  }\r\n\r\ntable {\r\n    text-align: center;\r\n    margin: auto;\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n\r\ntr, td, th {\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n\r\n#myInput {\r\n    background-image: url('/css/searchicon.png');\r\n    /* Add a search icon to input */\r\n    background-position: 10px 12px;\r\n    /* Position the search icon */\r\n    background-repeat: no-repeat;\r\n    /* Do not repeat the icon image */\r\n    width: 25%;\r\n    /* Full-width */\r\n    font-size: 16px;\r\n    /* Increase font-size */\r\n    padding: 12px 20px 12px 40px;\r\n    /* Add some padding */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    margin-bottom: 12px;\r\n    /* Add some space below the input */\r\n  }\r\n\r\n#myTable {\r\n    background-color: white;\r\n    border-collapse: collapse;\r\n    /* Collapse borders */\r\n    width: 85%;\r\n    /* Full-width */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    font-size: 18px;\r\n    /* Increase font-size */\r\n  }\r\n\r\n#myTable th, #myTable td {\r\n    text-align: left;\r\n    /* Left-align text */\r\n    padding: 12px;\r\n    /* Add padding */\r\n  }\r\n\r\n#myTable tr {\r\n    /* Add a bottom border to all table rows */\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n\r\n#myTable tr.header, #myTable tr:hover {\r\n    /* Add a grey background color to the table header and on hover */\r\n    background-color: rgba(8, 139, 30, 0.527);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItcHJpdmF0ZS1jb3Vwb25zL2N1c3RvbWVyLXByaXZhdGUtY291cG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHdJQUF3STtBQUM1STs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLDRDQUE0QztJQUM1QywrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1DQUFtQztFQUNyQzs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsMENBQTBDO0lBQzFDLDZCQUE2QjtFQUMvQjs7QUFFQTtJQUNFLGlFQUFpRTtJQUNqRSx5Q0FBeUM7RUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1wcml2YXRlLWNvdXBvbnMvY3VzdG9tZXItcHJpdmF0ZS1jb3Vwb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDIyNCwgOTIsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgdHIsIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIHJnYigyMjQsIDkyLCA5Mik7XHJcbiAgfVxyXG4gIFxyXG4gICNteUlucHV0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Nzcy9zZWFyY2hpY29uLnBuZycpO1xyXG4gICAgLyogQWRkIGEgc2VhcmNoIGljb24gdG8gaW5wdXQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTJweDtcclxuICAgIC8qIFBvc2l0aW9uIHRoZSBzZWFyY2ggaWNvbiAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8qIERvIG5vdCByZXBlYXQgdGhlIGljb24gaW1hZ2UgKi9cclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBGdWxsLXdpZHRoICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvKiBJbmNyZWFzZSBmb250LXNpemUgKi9cclxuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDQwcHg7XHJcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLyogQWRkIGEgZ3JleSBib3JkZXIgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAvKiBBZGQgc29tZSBzcGFjZSBiZWxvdyB0aGUgaW5wdXQgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLyogQ29sbGFwc2UgYm9yZGVycyAqL1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRoLCAjbXlUYWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogTGVmdC1hbGlnbiB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgLyogQWRkIHBhZGRpbmcgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUgdHIge1xyXG4gICAgLyogQWRkIGEgYm90dG9tIGJvcmRlciB0byBhbGwgdGFibGUgcm93cyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRyLmhlYWRlciwgI215VGFibGUgdHI6aG92ZXIge1xyXG4gICAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0YWJsZSBoZWFkZXIgYW5kIG9uIGhvdmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEzOSwgMzAsIDAuNTI3KTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/customer/customer-private-coupons/customer-private-coupons.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/customer/customer-private-coupons/customer-private-coupons.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CustomerPrivateCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPrivateCouponsComponent", function() { return CustomerPrivateCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");




let CustomerPrivateCouponsComponent = class CustomerPrivateCouponsComponent {
    constructor(activeRoute, couponService) {
        this.activeRoute = activeRoute;
        this.couponService = couponService;
    }
    ngOnInit() {
        this.getCoupons();
    }
    getCoupons() {
        let obsOfCoupon = this.couponService.getAllCustomerCoupons(localStorage.getItem("token"));
        obsOfCoupon.subscribe(arr => {
            this.coupons = arr;
            this.findedCoupons = [];
            for (const c of this.coupons) {
                this.findedCoupons.push(c);
            }
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    deleteCoupon(id) {
        confirm("Are you sure that you want to remove coupon?");
        this.couponService.deleteCustomerCoupon(id, localStorage.getItem("token")).subscribe(msg => {
            this.ngOnInit();
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    applyFilter(event) {
        let q = event.target.value;
        let arr = this.coupons.filter((c) => {
            return c.title.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCoupons = arr;
    }
};
CustomerPrivateCouponsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] }
];
CustomerPrivateCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-private-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-private-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-private-coupons/customer-private-coupons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-private-coupons.component.css */ "./src/app/customer/customer-private-coupons/customer-private-coupons.component.css")).default]
    })
], CustomerPrivateCouponsComponent);



/***/ }),

/***/ "./src/app/customer/customer-update-profile/customer-update-profile.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/customer/customer-update-profile/customer-update-profile.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n* {box-sizing: border-box}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nhr.sep-2 {\r\n  border: 0; \r\n  height: 1px; \r\n  background-image: linear-gradient(to right, #f0f0f0, rgb(207, 94, 94), #59d941,rgb(207, 94, 94));\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nb{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  }\r\n\r\nhr {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,p{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    \r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 13px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn, .signupbtn {\r\n    text-align: center;\r\n  /* float: left; */\r\n  width: 30%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  padding: 16px;\r\n  height: 100vh;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n    \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItdXBkYXRlLXByb2ZpbGUvY3VzdG9tZXItdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsR0FBRyxzQkFBc0I7O0FBRXpCLDRCQUE0Qjs7QUFDMUI7SUFDRSx3SUFBd0k7RUFDMUksVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLGdHQUFnRztBQUNsRzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7SUFDSSx3SUFBd0k7RUFDMUk7O0FBRUY7SUFDSSx3SUFBd0k7RUFDMUkseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFDQTtJQUNJLHdJQUF3STtBQUM1STs7QUFFQSxnQ0FBZ0M7O0FBQ2hDOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx3SUFBd0k7RUFDMUksU0FBUztBQUNYOztBQUVBLHVDQUF1Qzs7QUFDdkM7SUFDSSx3SUFBd0k7SUFDeEksa0JBQWtCO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQSwyREFBMkQ7O0FBQzNEO0lBQ0ksa0JBQWtCO0VBQ3BCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBR0Esc0NBQXNDOztBQUN0QztFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFOztJQUVFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItdXBkYXRlLXByb2ZpbGUvY3VzdG9tZXItdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuaHIuc2VwLTIge1xyXG4gIGJvcmRlcjogMDsgXHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwZjBmMCwgcmdiKDIwNywgOTQsIDk0KSwgIzU5ZDk0MSxyZ2IoMjA3LCA5NCwgOTQpKTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmJ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbmhyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmgxLHB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCA5NCwgOTQsIDAuNDA0KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/customer/customer-update-profile/customer-update-profile.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/customer/customer-update-profile/customer-update-profile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomerUpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUpdateProfileComponent", function() { return CustomerUpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CustomerUpdateProfileComponent = class CustomerUpdateProfileComponent {
    constructor(activeRoute, customerService, router) {
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.router = router;
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.customerFirstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.customerLastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.customerEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.customerPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]);
        this.id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.customerService.getMyCustomer(localStorage.getItem("token")).subscribe(c => {
            this.customer = c;
            this.customerFirstName.setValue(c.firstName);
            this.customerLastName.setValue(c.lastName);
            this.customerEmail.setValue(c.email);
            this.customerPassword.setValue(c.password);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    updateCustomer() {
        this.customer.firstName = this.customerFirstName.value;
        this.customer.lastName = this.customerLastName.value;
        this.customer.email = this.customerEmail.value;
        this.customer.password = this.customerPassword.value;
        this.customerService.updateCustomer(this.customer, localStorage.getItem("token")).subscribe(c => {
            this.customer = c;
            alert("Your User updated !");
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
};
CustomerUpdateProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CustomerUpdateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-update-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-update-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-update-profile/customer-update-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-update-profile.component.css */ "./src/app/customer/customer-update-profile/customer-update-profile.component.css")).default]
    })
], CustomerUpdateProfileComponent);



/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.css":
/*!************************************************************************!*\
  !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n.row {\r\n    text-align: center;\r\n    \r\n    /* width: 1500px;\r\n    height: 1000px; */\r\n    /* box-sizing: border-box; */ /* IE10 */\r\n    display: flex; /* IE10 */\r\n    flex-wrap: wrap;\r\n    margin: 0 -16px;\r\n  }\r\nh3,label{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\r\n  }\r\n.col-25 { /* IE10 */\r\n    flex: 25%;\r\n  }\r\n.col-50 { /* IE10 */\r\n    flex: 50%;\r\n  }\r\n.col-75 { /* IE10 */\r\n    flex: 75%;\r\n  }\r\n.col-25,\r\n  .col-50,\r\n  .col-75 {\r\n    padding: 0 16px;\r\n  }\r\n.container {\r\n    background-color: #f2f2f2;\r\n    padding: 5px 20px 15px 20px;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 3px;\r\n  }\r\ninput[type=text] {\r\n    width: 50%;\r\n    margin-bottom: 10px;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n  }\r\nlabel {\r\n    margin-bottom: 10px;\r\n    display: block;\r\n  }\r\n.icon-container {\r\n    margin-bottom: 20px;\r\n    padding: 7px 0;\r\n    font-size: 24px;\r\n  }\r\n.btn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px;\r\n    margin: 10px 0;\r\n    border: none;\r\n    width: 30%;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n  }\r\n.btn:hover {\r\n    background-color: #45a049;\r\n  }\r\nspan.price {\r\n    float: right;\r\n    color: grey;\r\n  }\r\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the \"cart\" column go on top) */\r\n@media (max-width: 800px) {\r\n    .row {\r\n      flex-direction: column-reverse;\r\n    }\r\n    .col-25 {\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n   \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvcHVyY2hhc2UtY291cG9uL3B1cmNoYXNlLWNvdXBvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0lBQXdJO0FBQzFJO0FBQ0E7SUFDSSxrQkFBa0I7O0lBRWxCO3FCQUNpQjtJQUNqQiw0QkFBNEIsRUFDTixTQUFTO0lBQy9CLGFBQWEsRUFDUSxTQUFTO0lBQzlCLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx3SUFBd0k7O0VBRTFJO0FBQ0EsVUFDaUIsU0FBUztJQUN4QixTQUFTO0VBQ1g7QUFFQSxVQUNpQixTQUFTO0lBQ3hCLFNBQVM7RUFDWDtBQUVBLFVBQ2lCLFNBQVM7SUFDeEIsU0FBUztFQUNYO0FBRUE7OztJQUdFLGVBQWU7RUFDakI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFFQSw2TUFBNk07QUFDN007SUFDRTtNQUNFLDhCQUE4QjtJQUNoQztJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCOzs7RUFHRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3B1cmNoYXNlLWNvdXBvbi9wdXJjaGFzZS1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC8qIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDsgKi9cclxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovIFxyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwOyAvKiBJRTEwICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDAgLTE2cHg7XHJcbiAgfVxyXG4gIGgzLGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgfVxyXG4gIC5jb2wtMjUge1xyXG4gICAgLW1zLWZsZXg6IDI1JTsgLyogSUUxMCAqL1xyXG4gICAgZmxleDogMjUlO1xyXG4gIH1cclxuICBcclxuICAuY29sLTUwIHtcclxuICAgIC1tcy1mbGV4OiA1MCU7IC8qIElFMTAgKi9cclxuICAgIGZsZXg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC03NSB7XHJcbiAgICAtbXMtZmxleDogNzUlOyAvKiBJRTEwICovXHJcbiAgICBmbGV4OiA3NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtMjUsXHJcbiAgLmNvbC01MCxcclxuICAuY29sLTc1IHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHggMTVweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG4gIH1cclxuICBcclxuICBzcGFuLnByaWNlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gODAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKGFuZCBjaGFuZ2UgdGhlIGRpcmVjdGlvbiAtIG1ha2UgdGhlIFwiY2FydFwiIGNvbHVtbiBnbyBvbiB0b3ApICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAucm93IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG4gICAgLmNvbC0yNSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mode.service */ "./src/app/services/mode.service.ts");
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupons.service */ "./src/app/services/coupons.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let PurchaseCouponComponent = class PurchaseCouponComponent {
    constructor(title, activeRoute, couponService, modeService, router) {
        this.title = title;
        this.activeRoute = activeRoute;
        this.couponService = couponService;
        this.modeService = modeService;
        this.router = router;
        this.id = this.activeRoute.snapshot.params['id'];
        this.title.setTitle("Purchase Page");
    }
    ngOnInit() {
        this.couponService.getCouponByIdRest(this.id).subscribe(c => {
            this.coupon = c;
        }, err => {
            let obj = err.error;
            alert(obj.message);
        });
    }
    purchaseCoupon(id) {
        this.couponService.purchaseCoupon(this.id, localStorage.getItem("token")).subscribe(c => {
            alert("The coupon was successfully purchased");
            this.router.navigate(["customer/coupons"]);
        }, err => {
            let obj = err.error;
            alert(obj.message);
        });
    }
};
PurchaseCouponComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] },
    { type: src_app_services_mode_service__WEBPACK_IMPORTED_MODULE_2__["ModeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/purchase-coupon/purchase-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-coupon.component.css */ "./src/app/customer/purchase-coupon/purchase-coupon.component.css")).default]
    })
], PurchaseCouponComponent);



/***/ }),

/***/ "./src/app/deals/deals.component.css":
/*!*******************************************!*\
  !*** ./src/app/deals/deals.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    background-color:rgba(207, 94, 94, 0.404);\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\ndiv {\r\n    height: 100vh;\r\n    overflow: scroll;\r\n  }\r\n/* \r\n .grid{\r\n   display: grid;\r\n  display: inline-grid;\r\n } */\r\ntable {\r\n    text-align: center;\r\n    margin: auto;\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\ntr, td, th {\r\n    border: solid rgb(224, 92, 92);\r\n  }\r\n#myInput {\r\n    background-image: url('/css/searchicon.png');\r\n    /* Add a search icon to input */\r\n    background-position: 10px 12px;\r\n    /* Position the search icon */\r\n    background-repeat: no-repeat;\r\n    /* Do not repeat the icon image */\r\n    width: 100%;\r\n    /* Full-width */\r\n    font-size: 16px;\r\n    /* Increase font-size */\r\n    padding: 12px 20px 12px 40px;\r\n    /* Add some padding */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    margin-bottom: 12px;\r\n    /* Add some space below the input */\r\n  }\r\n#myTable {\r\n    background-color: white;\r\n    border-collapse: collapse;\r\n    /* Collapse borders */\r\n    width: 95%;\r\n    /* Full-width */\r\n    border: 1px solid #ddd;\r\n    /* Add a grey border */\r\n    font-size: 18px;\r\n    /* Increase font-size */\r\n  }\r\n#myTable th, #myTable td {\r\n    text-align: left;\r\n    /* Left-align text */\r\n    padding: 12px;\r\n    /* Add padding */\r\n  }\r\n#myTable tr {\r\n    /* Add a bottom border to all table rows */\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n#myTable tr.header, #myTable tr:hover {\r\n    /* Add a grey background color to the table header and on hover */\r\n    background-color: rgba(8, 139, 30, 0.527);\r\n  }\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: arial;\r\n  }\r\n.price {\r\n    color: grey;\r\n    font-size: 22px;\r\n  }\r\n.card button {\r\n    border: none;\r\n    outline: 0;\r\n    padding: 12px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n.card button:hover {\r\n    opacity: 0.7;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGVhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztJQUN6Qyx3SUFBd0k7QUFDNUk7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRjs7OztJQUlJO0FBRUY7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckM7QUFFQTtJQUNFLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLDBDQUEwQztJQUMxQyw2QkFBNkI7RUFDL0I7QUFFQTtJQUNFLGlFQUFpRTtJQUNqRSx5Q0FBeUM7RUFDM0M7QUFNQTtJQUNFLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2RlYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwNywgOTQsIDk0LCAwLjQwNCk7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmRpdiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbi8qIFxyXG4gLmdyaWR7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiB9ICovXHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMjI0LCA5MiwgOTIpO1xyXG4gIH1cclxuICBcclxuICB0ciwgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDIyNCwgOTIsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgI215SW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvY3NzL3NlYXJjaGljb24ucG5nJyk7XHJcbiAgICAvKiBBZGQgYSBzZWFyY2ggaWNvbiB0byBpbnB1dCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMnB4O1xyXG4gICAgLyogUG9zaXRpb24gdGhlIHNlYXJjaCBpY29uICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLyogRG8gbm90IHJlcGVhdCB0aGUgaWNvbiBpbWFnZSAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBGdWxsLXdpZHRoICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvKiBJbmNyZWFzZSBmb250LXNpemUgKi9cclxuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDQwcHg7XHJcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLyogQWRkIGEgZ3JleSBib3JkZXIgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAvKiBBZGQgc29tZSBzcGFjZSBiZWxvdyB0aGUgaW5wdXQgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLyogQ29sbGFwc2UgYm9yZGVycyAqL1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBBZGQgYSBncmV5IGJvcmRlciAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRoLCAjbXlUYWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogTGVmdC1hbGlnbiB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgLyogQWRkIHBhZGRpbmcgKi9cclxuICB9XHJcbiAgXHJcbiAgI215VGFibGUgdHIge1xyXG4gICAgLyogQWRkIGEgYm90dG9tIGJvcmRlciB0byBhbGwgdGFibGUgcm93cyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gICNteVRhYmxlIHRyLmhlYWRlciwgI215VGFibGUgdHI6aG92ZXIge1xyXG4gICAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0YWJsZSBoZWFkZXIgYW5kIG9uIGhvdmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDEzOSwgMzAsIDAuNTI3KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gIH1cclxuICBcclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/deals/deals.component.ts":
/*!******************************************!*\
  !*** ./src/app/deals/deals.component.ts ***!
  \******************************************/
/*! exports provided: DealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsComponent", function() { return DealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/coupons.service */ "./src/app/services/coupons.service.ts");




let DealsComponent = class DealsComponent {
    constructor(title, couponService) {
        this.title = title;
        this.couponService = couponService;
    }
    ngOnInit() {
        this.title.setTitle("Our Deals");
        this.getCoupons();
    }
    getCoupons() {
        let obsOfCoupon = this.couponService.getAllCoupons();
        obsOfCoupon.subscribe(arr => {
            this.coupons = arr;
            this.findedCoupons = [];
            for (const c of this.coupons) {
                this.findedCoupons.push(c);
            }
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    applyFilter(event) {
        let q = event.target.value;
        let arr = this.coupons.filter((c) => {
            return c.title.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) != -1;
        });
        this.findedCoupons = arr;
    }
};
DealsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _services_coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] }
];
DealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deals.component.css */ "./src/app/deals/deals.component.css")).default]
    })
], DealsComponent);



/***/ }),

/***/ "./src/app/design/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/design/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer{\r\n    background-color: white;\r\n    position:absolute;\r\n    bottom:0px;\r\n    width:100%;\r\n    text-align:center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n    \r\n    .fa {\r\n        padding: 3px;\r\n        font-size: 20px;\r\n        width: 20px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        border-radius: 50%;\r\n      }\r\n    \r\n    .fa-linkedin {\r\n        background: #007bb5;\r\n        color:  white;\r\n      }\r\n    \r\n    .fa-facebook {\r\n        background: #3B5998;\r\n        color: white;\r\n      }\r\n    \r\n    .fa-google {\r\n        background: #dd4b39;\r\n        color: white;\r\n      }\r\n      \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsd0lBQXdJO0FBQzVJOztJQUVJO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixrQkFBa0I7TUFDcEI7O0lBQ0Y7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtNQUNmOztJQUNBO1FBQ0UsbUJBQW1CO1FBQ25CLFlBQVk7TUFDZDs7SUFDQTtRQUNFLG1CQUFtQjtRQUNuQixZQUFZO01BQ2QiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG4gICAgXHJcbiAgICAuZmEge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIC5mYS1saW5rZWRpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgICAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5mYS1mYWNlYm9vayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmZhLWdvb2dsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/design/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/design/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/design/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/design/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/design/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/design/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nheader{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/design/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/design/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/design/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/design/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/design/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/design/home/home.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/design/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/design/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_mode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mode.service */ "./src/app/services/mode.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(title, modeService, router) {
        this.title = title;
        this.modeService = modeService;
        this.router = router;
    }
    ngOnInit() {
        this.title.setTitle("Home");
        if (this.modeService.mode = this.modeService.LOOGED_IN) {
            this.modeService.clientType = localStorage.getItem("type");
        }
        else {
            this.router.navigate([""]);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: src_app_services_mode_service__WEBPACK_IMPORTED_MODULE_3__["ModeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/design/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/design/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main{\r\n     height: 100%;\r\n     margin: 0;\r\n}\r\n\r\nsection {\r\n    \r\n    padding: 0px 0px 10px 0;  \r\n       min-height: 100%;\r\n            box-sizing: border-box ;\r\n                 position: relative;\r\n                      text-align: center;\r\n                           border:0px solid black;\r\n                                background-image: linear-gradient(white, white); \r\n                                grid-template-columns: repeat();\r\n                               }\r\n\r\nheader {\r\n    height: 238px;\r\n         line-height: 64px; \r\n             border: 0 solid rgb(207, 94, 94);  \r\n                border-bottom-width: 2px; }\r\n\r\nfooter { \r\n   height: 30px;   \r\n     line-height: 30px;   \r\n       width: 100%; \r\n           border: 0 solid rgb(207, 94, 94);   \r\n             border-top-width: 2px;  \r\n               position: fixed;  \r\n                  bottom: 0px; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssWUFBWTtLQUNaLFNBQVM7QUFDZDs7QUFFQTs7SUFFSSx1QkFBdUI7T0FDcEIsZ0JBQWdCO1lBQ1gsdUJBQXVCO2lCQUNsQixrQkFBa0I7c0JBQ2Isa0JBQWtCOzJCQUNiLHNCQUFzQjtnQ0FDakIsK0NBQStDO2dDQUMvQywrQkFBK0I7K0JBQ2hDOztBQUcvQjtJQUNJLGFBQWE7U0FDUixpQkFBaUI7YUFDYixnQ0FBZ0M7Z0JBQzdCLHdCQUF3QixFQUFFOztBQUUxQztHQUNHLFlBQVk7S0FDVixpQkFBaUI7T0FDZixXQUFXO1dBQ1AsZ0NBQWdDO2FBQzlCLHFCQUFxQjtlQUNuQixlQUFlO2tCQUNaLFdBQVcsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwOyAgXHJcbiAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94IDtcclxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjowcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG5cclxuXHJcbmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDIzOHB4O1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogNjRweDsgXHJcbiAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgcmdiKDIwNywgOTQsIDk0KTsgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4OyB9IFxyXG5cclxuZm9vdGVyIHsgXHJcbiAgIGhlaWdodDogMzBweDsgICBcclxuICAgICBsaW5lLWhlaWdodDogMzBweDsgICBcclxuICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICBib3JkZXI6IDAgc29saWQgcmdiKDIwNywgOTQsIDk0KTsgICBcclxuICAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDsgIFxyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7ICBcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7IH0iXX0= */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/login/adm.service.ts":
/*!**************************************!*\
  !*** ./src/app/login/adm.service.ts ***!
  \**************************************/
/*! exports provided: AdmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmService", function() { return AdmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AdmService = class AdmService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    canActivate(rote, state) {
        if (localStorage.getItem("token") != null && localStorage.getItem("type") == "-1") {
            return true;
        }
        else {
            this.router.navigate(["/home"]);
            return false;
        }
    }
    getHttpOptionsTxt() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            }),
            responseType: 'text', withCredentials: true
        };
        return httpOptions;
    }
    //get token from the server- send http request (authentication)
    authenticateMe(userCredentials) {
        return this.httpClient.post("http://localhost:8080/api/login?email=" + userCredentials.email + "&password=" + userCredentials.password, null, this.getHttpOptionsTxt());
    }
};
AdmService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AdmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AdmService);



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthService = class AuthService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    canActivate(rote, state) {
        if (localStorage.getItem("token") != null) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
    getHttpOptionsTxt() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            }),
            responseType: 'text', withCredentials: true
        };
        return httpOptions;
    }
    //get token from the server- send http request (authentication)
    authenticateMe(userCredentials) {
        return this.httpClient.post("http://localhost:8080/api/login?email=" + userCredentials.email + "&password=" + userCredentials.password, null, this.getHttpOptionsTxt());
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/login/comp.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/comp.service.ts ***!
  \***************************************/
/*! exports provided: CompService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompService", function() { return CompService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CompService = class CompService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    canActivate(rote, state) {
        if (localStorage.getItem("token") != null && localStorage.getItem("type") == "2") {
            return true;
        }
        else {
            this.router.navigate(["/home"]);
            return false;
        }
    }
};
CompService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
CompService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CompService);



/***/ }),

/***/ "./src/app/login/cus.service.ts":
/*!**************************************!*\
  !*** ./src/app/login/cus.service.ts ***!
  \**************************************/
/*! exports provided: CusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusService", function() { return CusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CusService = class CusService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    canActivate(rote, state) {
        if (localStorage.getItem("token") != null && localStorage.getItem("type") == "1") {
            return true;
        }
        else {
            this.router.navigate(["/home"]);
            return false;
        }
    }
    getHttpOptionsTxt() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            }),
            responseType: 'text', withCredentials: true
        };
        return httpOptions;
    }
    //get token from the server- send http request (authentication)
    authenticateMe(userCredentials) {
        return this.httpClient.post("http://localhost:8080/api/login?email=" + userCredentials.email + "&password=" + userCredentials.password, null, this.getHttpOptionsTxt());
    }
};
CusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CusService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n@charset \"utf-8\";\n[class*=\"fontawesome-\"]:before {\r\n  font-family: 'FontAwesome', sans-serif;\r\n}\n.background{\r\n  background-color: rgba(207, 94, 94, 0.404);\r\n  display: flex;\r\n  min-height: 65vh;\r\n}\nbody {\r\n  background: #2c3338;\r\n  color: #606468;\r\n  font: 87.5%/1.5em 'Open Sans', sans-serif;\r\n  margin: 0;\r\n}\ninput {\r\n  border: none;\r\n  font-family: 'Open Sans', Arial, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 1.5em;\r\n  padding: 0;\r\n  -webkit-appearance: none;\r\n}\np {\r\n  line-height: 1.5em;\r\n}\nafter { clear: both; }\n#login {\r\n  margin: 100px auto;\r\n  width: 317px;\r\n}\n#login form {\r\n  margin: auto;\r\n  padding: 22px 22px 22px 22px;\r\n  width: 90%;\r\n  border-radius: 10px;\r\n  background: #282e33;\r\n  border-top: 3px solid #434a52;\r\n  border-bottom: 3px solid #434a52;\r\n}\n#login form span {\r\n  background-color: #363b41;\r\n  border-radius: 3px 0px 0px 3px;\r\n  border-right: 3px solid rgb(47, 139, 62);\r\n  color: rgb(207, 94, 94);\r\n  display: block;\r\n  float: left;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  width: 50px;\r\n  height: 50px;\r\n}\n#login form input[type=\"text\"] {\r\n  background-color: #3b4148;\r\n  border-radius: 0px 3px 3px 0px;\r\n  color: #a9a9a9;\r\n  margin-bottom: 1em;\r\n  padding: 0 16px;\r\n  width: 200px;\r\n  height: 50px;\r\n  \r\n}\n#login form input[type=\"password\"] {\r\n  background-color: #3b4148;\r\n  border-radius: 0px 3px 3px 0px;\r\n  color: #a9a9a9;\r\n  margin-bottom: 1em;\r\n  padding: 0 16px;\r\n  width: 200px;\r\n  height: 50px;\r\n}\n#login form input[type=\"submit\"] {\r\n  background: rgb(207, 94, 94);\r\n  border: 0;\r\n  width: 70%;\r\n  height: 40px;\r\n  border-radius: 3px;\r\n  color: white;\r\n  cursor: pointer;\r\n  /* transition: background 0.3s ease-in-out; */\r\n}\n#login form input[type=\"submit\"]:hover {\r\n  background: rgb(102, 216, 121);\r\n  /* rgb(47, 139, 62) */\r\n}\n.req{\r\n  margin-bottom: 10px;\r\n  \r\n  width: 120px;\r\n  font-size: small;\r\n  color: white;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsK0RBQStEO0FBRC9ELGdCQUFnQjtBQUdoQjtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLFNBQVM7QUFDWDtBQUVBO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUlBLFFBQVEsV0FBVyxFQUFFO0FBSXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFHQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7QUFLQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix3SUFBd0k7QUFDMUkiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5AaW1wb3J0IHVybChodHRwOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1mb250YXdlc29tZSk7XHJcblxyXG5bY2xhc3MqPVwiZm9udGF3ZXNvbWUtXCJdOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDk0LCA5NCwgMC40MDQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogNjV2aDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjMmMzMzM4O1xyXG4gIGNvbG9yOiAjNjA2NDY4O1xyXG4gIGZvbnQ6IDg3LjUlLzEuNWVtICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuXHJcblxyXG5hZnRlciB7IGNsZWFyOiBib3RoOyB9XHJcblxyXG5cclxuXHJcbiNsb2dpbiB7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIHdpZHRoOiAzMTdweDtcclxufVxyXG5cclxuI2xvZ2luIGZvcm0ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAyMnB4IDIycHggMjJweCAyMnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjgyZTMzO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNDM0YTUyO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNDM0YTUyO1xyXG59XHJcblxyXG4jbG9naW4gZm9ybSBzcGFuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzYjQxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoNDcsIDEzOSwgNjIpO1xyXG4gIGNvbG9yOiByZ2IoMjA3LCA5NCwgOTQpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4jbG9naW4gZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDE0ODtcclxuICBib3JkZXItcmFkaXVzOiAwcHggM3B4IDNweCAwcHg7XHJcbiAgY29sb3I6ICNhOWE5YTk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4jbG9naW4gZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjQxNDg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xyXG4gIGNvbG9yOiAjYTlhOWE5O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI2xvZ2luIGZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNywgOTQsIDk0KTtcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0OyAqL1xyXG59XHJcbiNsb2dpbiBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMDIsIDIxNiwgMTIxKTtcclxuICAvKiByZ2IoNDcsIDEzOSwgNjIpICovXHJcbn1cclxuLnJlcXtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gIHdpZHRoOiAxMjBweDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _models_user_credentials_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user-credentials.model */ "./src/app/models/user-credentials.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _services_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mode.service */ "./src/app/services/mode.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let LoginComponent = class LoginComponent {
    constructor(modeService, authService, title, router) {
        this.modeService = modeService;
        this.authService = authService;
        this.title = title;
        this.router = router;
        this.LOOGED_IN = 'LOOGED_IN';
        this.LOOGED_OUT = 'LOOGED_OUT';
        this.mode = this.LOOGED_OUT;
        this.clientType = undefined;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](localStorage.getItem("isLoggedIn") === "true");
    }
    ngOnInit() {
    }
    login() {
        let userCredentials = new _models_user_credentials_model__WEBPACK_IMPORTED_MODULE_3__["UserCredentials"](this.email, this.password);
        let obsJwt = this.authService.authenticateMe(userCredentials);
        obsJwt.subscribe(myToken => {
            const obj = JSON.parse(myToken);
            localStorage.setItem("token", obj.token);
            localStorage.setItem("type", obj.type);
            this.clientType = localStorage.getItem('type');
            this.modeService.mode = this.modeService.LOOGED_IN;
            this.modeService.clientType = localStorage.getItem('type');
            this.router.navigate(["/home"]);
        }, err => {
            let obj = JSON.parse(err.error);
            alert(obj.message);
        });
    }
    validateForm() {
        if (this.email == "") {
            alert("Email and Password must be filled out");
            return false;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_mode_service__WEBPACK_IMPORTED_MODULE_5__["ModeService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {box-sizing: border-box;}\r\n#logout{\r\n  color: red;\r\n  \r\n}\r\n.topnav {\r\n    overflow: hidden;\r\n    background-color: #e9e9e9;\r\n  }\r\n.topnav a {\r\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    float: left;\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 0px 20px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n  }\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n.topnav a.active {\r\n    background-color: rgb(8, 139, 30);\r\n    color: white;\r\n  }\r\n.topnav .search-container {\r\n    float: right;\r\n  }\r\n.topnav input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 5px;\r\n    font-size: 17px;\r\n    border: none;\r\n  }\r\n.topnav .search-container button {\r\n    float: right;\r\n    padding: 7px 9px;\r\n    margin-top: 15px;\r\n    margin-right: 14px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n.topnav .search-container button:hover {\r\n    background: #ccc;\r\n  }\r\n@media screen and (max-width: 600px) {\r\n    .topnav .search-container {\r\n      float: none;\r\n    }\r\n    .topnav a, .topnav input[type=text], .topnav .search-container button {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 1000%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    .topnav input[type=text] {\r\n      border: 1px solid #ccc;  \r\n    }\r\n    \r\n\r\n    /* .active-link{\r\n        color:rgb(8, 139, 30);\r\n        font-weight:bold;\r\n    \r\n} */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0IsQ0FBQztBQUMxQjtFQUNFLFVBQVU7O0FBRVo7QUFDRTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7QUFFQTtNQUNJLHdJQUF3STtJQUMxSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsWUFBWTtFQUNkO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixTQUFTO01BQ1QsYUFBYTtJQUNmO0lBQ0E7TUFDRSxzQkFBc0I7SUFDeEI7OztJQUdBOzs7O0dBSUQ7RUFDRCIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcbiNsb2dvdXR7XHJcbiAgY29sb3I6IHJlZDtcclxuICBcclxufVxyXG4gIC50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAxMzksIDMwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgLnNlYXJjaC1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDdweCA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50b3BuYXYgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC50b3BuYXYgYSwgLnRvcG5hdiBpbnB1dFt0eXBlPXRleHRdLCAudG9wbmF2IC5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2lkdGg6IDEwMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2IGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvKiAuYWN0aXZlLWxpbmt7XHJcbiAgICAgICAgY29sb3I6cmdiKDgsIDEzOSwgMzApO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcclxufSAqL1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mode.service */ "./src/app/services/mode.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deals/deals.component */ "./src/app/deals/deals.component.ts");





let MenuComponent = class MenuComponent {
    constructor(deals, modeService, router) {
        this.deals = deals;
        this.modeService = modeService;
        this.router = router;
    }
    ngOnInit() {
        this.online();
    }
    online() {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        this.modeService.logout(localStorage.getItem("token")).subscribe(msg => {
            localStorage.removeItem("token");
            localStorage.removeItem("type");
            localStorage.removeItem("isLoggedIn");
            this.modeService.mode = this.modeService.LOOGED_OUT;
            this.modeService.clientType = null;
        }, err => {
        });
        this.modeService.clientType = null;
        this.modeService.mode = this.modeService.LOOGED_OUT;
    }
    applyFilter(event) {
        this.router.navigate(["deals"]);
        this.deals.ngOnInit();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _deals_deals_component__WEBPACK_IMPORTED_MODULE_4__["DealsComponent"] },
    { type: _services_mode_service__WEBPACK_IMPORTED_MODULE_2__["ModeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/models/admin.ts":
/*!*********************************!*\
  !*** ./src/app/models/admin.ts ***!
  \*********************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Admin {
    constructor(email, id, password) {
        this.email = email;
        this.id = id;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/models/company.ts":
/*!***********************************!*\
  !*** ./src/app/models/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Company {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/models/coupon.ts":
/*!**********************************!*\
  !*** ./src/app/models/coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Coupon {
    constructor(companyName, id, title, startDate, endDate, category, amount, description, price) {
        this.companyName = companyName;
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.category = category;
        this.amount = amount;
        this.description = description;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Customer {
    constructor(firstName, lastName, id, password, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.password = password;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/models/user-credentials.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/user-credentials.model.ts ***!
  \**************************************************/
/*! exports provided: UserCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCredentials", function() { return UserCredentials; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserCredentials {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #2F3242;\r\n  }\r\n  svg {\r\n    position: absolute;\r\n    top: 70%;\r\n    left: 50%;\r\n    margin-top: -250px;\r\n    margin-left: -400px;\r\n  }\r\n  .message-box {\r\n    height: 200px;\r\n    width: 380px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -100px;\r\n    margin-left: 50px;\r\n    color: rgb(207, 94, 94);\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 300;\r\n  }\r\n  .message-box h1 {\r\n    font-size: 80px;\r\n    line-height: 46px;\r\n    margin-bottom: 40px;\r\n  }\r\n  .buttons-con .action-link-wrap {\r\n    color: rgb(207, 94, 94);\r\n    margin-top: 40px;\r\n  }\r\n  .buttons-con .action-link-wrap a {\r\n    background: #68c950;\r\n    padding: 8px 25px;\r\n    border-radius: 4px;\r\n    color: rgb(207, 94, 94);\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    transition: all 0.3s linear;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin-right: 10px\r\n  }\r\n  .buttons-con .action-link-wrap a:hover {\r\n    background: #5A5C6C;\r\n    color: #fff;\r\n  }\r\n  #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {\r\n    -webkit-animation: float 1s infinite ease-in-out alternate;\r\n            animation: float 1s infinite ease-in-out alternate;\r\n  }\r\n  #Polygon-2 {\r\n    -webkit-animation-delay: .2s;\r\n            animation-delay: .2s; \r\n  }\r\n  #Polygon-3 {\r\n    -webkit-animation-delay: .4s;\r\n            animation-delay: .4s; \r\n  }\r\n  #Polygon-4 {\r\n    -webkit-animation-delay: .6s;\r\n            animation-delay: .6s; \r\n  }\r\n  #Polygon-5 {\r\n    -webkit-animation-delay: .8s;\r\n            animation-delay: .8s; \r\n  }\r\n  @-webkit-keyframes float {\r\n      100% {\r\n      transform: translateY(20px);\r\n    }\r\n  }\r\n  @keyframes float {\r\n      100% {\r\n      transform: translateY(20px);\r\n    }\r\n  }\r\n  @media (max-width: 450px) {\r\n    svg {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      margin-top: -250px;\r\n      margin-left: -190px;\r\n    }\r\n    .message-box {\r\n      top: 50%;\r\n      left: 50%;\r\n      margin-top: -100px;\r\n      margin-left: -190px;\r\n      text-align: center;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdJQUF3STtJQUN4SSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQjtFQUNGO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0VBRUE7SUFDRSwwREFBa0Q7WUFBbEQsa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBRUE7TUFDSTtNQUNBLDJCQUEyQjtJQUM3QjtFQUNGO0VBSkE7TUFDSTtNQUNBLDJCQUEyQjtJQUM3QjtFQUNGO0VBQ0E7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGMzI0MjtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtYm94IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigyMDcsIDk0LCA5NCk7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtYm94IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgLmJ1dHRvbnMtY29uIC5hY3Rpb24tbGluay13cmFwIHtcclxuICAgIGNvbG9yOiByZ2IoMjA3LCA5NCwgOTQpO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiAgLmJ1dHRvbnMtY29uIC5hY3Rpb24tbGluay13cmFwIGEge1xyXG4gICAgYmFja2dyb3VuZDogIzY4Yzk1MDtcclxuICAgIHBhZGRpbmc6IDhweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHJnYigyMDcsIDk0LCA5NCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gIH1cclxuICAuYnV0dG9ucy1jb24gLmFjdGlvbi1saW5rLXdyYXAgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNUE1QzZDO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gICNQb2x5Z29uLTEgLCAjUG9seWdvbi0yICwgI1BvbHlnb24tMyAsICNQb2x5Z29uLTQgLCAjUG9seWdvbi00LCAjUG9seWdvbi01IHtcclxuICAgIGFuaW1hdGlvbjogZmxvYXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlO1xyXG4gIH1cclxuICAjUG9seWdvbi0yIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLjJzOyBcclxuICB9XHJcbiAgI1BvbHlnb24tMyB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC40czsgXHJcbiAgfVxyXG4gICNQb2x5Z29uLTQge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNnM7IFxyXG4gIH1cclxuICAjUG9seWdvbi01IHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLjhzOyBcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NotFoundComponent = class NotFoundComponent {
    constructor(title, _location, router) {
        this.title = title;
        this._location = _location;
        this.router = router;
    }
    ngOnInit() {
        this.title.setTitle("404 Not Found");
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/services/companies.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/companies.service.ts ***!
  \***********************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompaniesService = class CompaniesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHttpOptions() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem("token")
            }), withCredentials: true,
        };
        return httpOptions;
    }
    getAllCompanies(token) {
        return this.httpClient.get("http://localhost:8080/api/admin/allcompanies/" + token, { withCredentials: true });
    }
    // public getCompanyByIdRest(companyId: number): Observable<Company> {
    //   return this.httpClient.get<Company>("http://localhost:8080/api/company/" + companyId, this.getHttpOptions());
    // }
    getCompanyById(id, token) {
        return this.httpClient.get("http://localhost:8080/api/admin/companybyid/" + id + "/" + token, { responseType: 'json', withCredentials: true });
    }
    getCompanyByEmail(email, token) {
        return this.httpClient.get("http://localhost:8080/api/admin/companybyemail/" + email + "/" + token, { responseType: 'json', withCredentials: true });
    }
    deleteCompany(id, token) {
        return this.httpClient.delete("http://localhost:8080/api/admin/deletecompany/" + id + "/" + token, { responseType: 'text', withCredentials: true });
    }
    addAdminCompany(token, company) {
        return this.httpClient.put("http://localhost:8080/api/admin/createcompany/" + token, company, { responseType: 'text', withCredentials: true });
    }
    updateAdminCompany(companyId, token, company) {
        return this.httpClient.put("http://localhost:8080/api/admin/update/company/" + companyId + "/" + token, company, { responseType: 'text', withCredentials: true });
    }
    //
    updateCompany(company, token) {
        return this.httpClient.put("http://localhost:8080/api/companies/update/company/" + token, company, { responseType: 'text', withCredentials: true });
    }
    getMyCompany(token) {
        return this.httpClient.get("http://localhost:8080/api/companies/get/" + token, { responseType: 'json', withCredentials: true });
    }
};
CompaniesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompaniesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompaniesService);



/***/ }),

/***/ "./src/app/services/coupons.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/coupons.service.ts ***!
  \*********************************************/
/*! exports provided: CouponsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsService", function() { return CouponsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CouponsService = class CouponsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHttpOptions() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem("token")
            }), withCredentials: true,
        };
        return httpOptions;
    }
    getHttpOptionsTxt() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem("token")
            }),
            responseType: 'text', withCredentials: true,
        };
        return httpOptions;
    }
    getAllCoupons() {
        return this.httpClient.get("http://localhost:8080/api/coupons/all", this.getHttpOptions());
    }
    updateAdmin(admin, token) {
        return this.httpClient.put("http://localhost:8080/api/admin/update/admin/" + token, admin, { responseType: 'text', withCredentials: true });
    }
    getMyAdmin(token) {
        return this.httpClient.get("http://localhost:8080/api/admin/get/" + token, { responseType: 'json', withCredentials: true });
    }
    getCouponByIdRest(id) {
        return this.httpClient.get("http://localhost:8080/api/coupons/" + id, this.getHttpOptions());
    }
    getAdminCouponById(id) {
        return this.httpClient.get("http://localhost:8080/api/admin/couponbyid/" + id, this.getHttpOptions());
    }
    deleteCoupon(id, token) {
        return this.httpClient.delete("http://localhost:8080/api/admin/deletecoupon/" + id + "/" + token, { responseType: 'text', withCredentials: true });
    }
    addAdminCoupon(token, companyId, coupon) {
        return this.httpClient.put("http://localhost:8080/api/admin/createcoupon/" + companyId + "/" + token, coupon, { responseType: 'text', withCredentials: true });
    }
    updateAdminCoupon(couponId, token, coupon) {
        return this.httpClient.put("http://localhost:8080/api/admin/update/coupon/" + couponId + "/" + token, coupon, { responseType: 'text', withCredentials: true });
    }
    getAllCompanyCoupons(token) {
        return this.httpClient.get("http://localhost:8080/api/companies/allcoupons/" + token, { withCredentials: true });
    }
    deleteCompanyCoupon(id, token) {
        return this.httpClient.delete("http://localhost:8080/api/companies/deletecoupon/" + id + "/" + token, { responseType: 'text', withCredentials: true });
    }
    getCompanyCouponByIdRest(id, token) {
        return this.httpClient.get("http://localhost:8080/api/companies/findcoupon/" + id + "/" + token, { responseType: 'json', withCredentials: true });
    }
    updateCompanyCoupon(couponId, token, coupon) {
        return this.httpClient.put("http://localhost:8080/api/companies/update/coupon/" + couponId + "/" + token, coupon, { responseType: 'text', withCredentials: true });
    }
    addCompanyCoupon(token, coupon) {
        return this.httpClient.put("http://localhost:8080/api/companies/add/" + token, coupon, { responseType: 'text', withCredentials: true });
    }
    purchaseCoupon(id, token) {
        return this.httpClient.put("http://localhost:8080/api/customers/purchasecoupon/" + id + "/" + token, { responseType: 'text', withCredentials: true });
    }
    getAllCustomerCoupons(token) {
        return this.httpClient.get("http://localhost:8080/api/customers/coupons/all/" + token, { withCredentials: true });
    }
    deleteCustomerCoupon(id, token) {
        return this.httpClient.delete("http://localhost:8080/api/customers/deletecoupon/" + id + "/" + token, { responseType: 'text', withCredentials: true });
    }
};
CouponsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CouponsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CouponsService);



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomersService = class CustomersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHttpOptions() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem("token")
            }), withCredentials: true,
        };
        return httpOptions;
    }
    getAllCustomers(token) {
        return this.httpClient.get("http://localhost:8080/api/admin/allcustomers/" + token, { withCredentials: true });
    }
    // public getCustomerByIdRest(customerId: number): Observable<Customer> {
    //   return this.httpClient.get<Customer>("http://localhost:8080/api/company/" + customerId, this.getHttpOptions());
    // }
    getCustomerById(id, token) {
        return this.httpClient.get("http://localhost:8080/api/admin/customerbyid/" + id + "/" + token, { responseType: 'json', withCredentials: true });
    }
    deleteCustomer(id, token) {
        return this.httpClient.delete("http://localhost:8080/api/admin/deletecustomer/" + id + "/" + token, { responseType: 'text', withCredentials: true });
    }
    addAdminCustomer(token, customer) {
        return this.httpClient.put("http://localhost:8080/api/admin/createcustomer/" + token, customer, { responseType: 'text', withCredentials: true });
    }
    updateAdminCustomer(customerId, token, customer) {
        return this.httpClient.put("http://localhost:8080/api/admin/update/customer/" + customerId + "/" + token, customer, { responseType: 'text', withCredentials: true });
    }
    //
    updateCustomer(customer, token) {
        return this.httpClient.put("http://localhost:8080/api/customers/update/customer/" + token, customer, { responseType: 'text', withCredentials: true });
    }
    getMyCustomer(token) {
        return this.httpClient.get("http://localhost:8080/api/customers/get/" + token, { responseType: 'json', withCredentials: true });
    }
    findCustomerByEmail(email, token) {
        return this.httpClient.get("http://localhost:8080/api/admin/customerbyemail/" + email + "/" + token, { responseType: 'json', withCredentials: true });
    }
};
CustomersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersService);



/***/ }),

/***/ "./src/app/services/mode.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/mode.service.ts ***!
  \******************************************/
/*! exports provided: ModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeService", function() { return ModeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ModeService = class ModeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.LOOGED_IN = 'LOOGED_IN';
        this.LOOGED_OUT = 'LOOGED_OUT';
        this.mode = this.LOOGED_OUT;
    }
    getHttpOptions() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem("token")
            }), withCredentials: true
        };
        return httpOptions;
    }
    getHttpOptionsTxt() {
        //create a object
        let httpOptions = {
            //add a field for headers
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": "Bearer " + localStorage.getItem("token")
            }),
            responseType: 'text', withCredentials: true
        };
        return httpOptions;
    }
    //get token from the server- send http request (authentication)
    logout(token) {
        return this.httpClient.post("http://localhost:8080/api/logout/" + token, { responseType: 'text', withCredentials: true });
    }
    loggedOut() {
        return localStorage.getItem("token") == null;
    }
};
ModeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ModeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModeService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Matan Elbaz\angular-workspace\CouponSystem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);