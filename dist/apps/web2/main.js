/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/web2/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/web2/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/web2/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_1 = __webpack_require__("./libs/auth/src/index.ts");
const user_1 = __webpack_require__("./libs/user/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const app_controller_1 = __webpack_require__("./apps/web2/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/web2/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                envFilePath: ['.env.local', '.env'],
            }),
            auth_1.AuthModule,
            user_1.UserModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//when building using nx, everything is a library. NX is able to support a laarge number of frameworks.
//Like building with lego pieces. Same lego in vue is the same in react or angular. All lego pieces can be used independently and together.
//when using a redux state manager, there's no need to rewrite actions and the reducer. There's a lot of reusability especially on cross platform development.
//We have one repo which is easily manageable. It allows us to have everything including shared functions in one repo.
//when building an app, picture it as a lego, not building from the ground up .
// Using a monorepo allows you to stack it up with libraries.
//when installing nestjs, it comes the architecture of our application
//the app is the core of our application. Nx allows scabiility to be a non-issue.A library is not bound to one part


/***/ }),

/***/ "./apps/web2/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to web2!' };
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./libs/auth/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/auth/src/lib/auth.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/auth/src/lib/auth.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/auth/src/lib/auth.module.ts"), exports);


/***/ }),

/***/ "./libs/auth/src/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const constants_1 = __webpack_require__("./libs/auth/src/lib/constants.ts");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { userId: payload.sub, username: payload.username };
        });
    }
}
exports.JwtStrategy = JwtStrategy;
//validation . 
//extending the passport strategy.


/***/ }),

/***/ "./libs/auth/src/lib/auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./libs/auth/src/lib/auth.service.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
};
AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./libs/auth/src/lib/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const auth_controller_1 = __webpack_require__("./libs/auth/src/lib/auth.controller.ts");
const auth_service_1 = __webpack_require__("./libs/auth/src/lib/auth.service.ts");
const constants_1 = __webpack_require__("./libs/auth/src/lib/constants.ts");
const jwt_strategy_1 = __webpack_require__("./libs/auth/src/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__("./libs/auth/src/local.strategy.ts");
const local_auth_guard_1 = __webpack_require__("./libs/auth/src/lib/local-auth.guard.ts");
const jwt_auth_guard_1 = __webpack_require__("./libs/auth/src/lib/jwt-auth.guard.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '6000s' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, local_auth_guard_1.LocalAuthGuard, jwt_auth_guard_1.JwtAuthGuard],
        exports: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, local_auth_guard_1.LocalAuthGuard, jwt_auth_guard_1.JwtAuthGuard],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./libs/auth/src/lib/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const client_1 = __webpack_require__("@prisma/client");
const bcrypt = __webpack_require__("bcrypt");
const prisma = new client_1.PrismaClient();
let AuthService = class AuthService {
    constructor(jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
    }
    loginWithCredentials(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = { username: user.username, sub: user.id };
            const accessToken = this.jwtTokenService.sign(payload);
            return accessToken;
        });
    }
    validateUserCredentials(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    username: username,
                }
            });
            if (user && (yield bcrypt.compare(password, user.password))) {
                const result = tslib_1.__rest(user, []);
                return result;
            }
        });
    }
};
AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./libs/auth/src/lib/constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: process.env.JWT_SECRET || 'secretKey',
};


/***/ }),

/***/ "./libs/auth/src/lib/jwt-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//guards for authentication.


/***/ }),

/***/ "./libs/auth/src/lib/local-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./libs/auth/src/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_local_1 = __webpack_require__("passport-local");
const auth_service_1 = __webpack_require__("./libs/auth/src/lib/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: "username",
        });
        this.authService = authService;
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUserCredentials(username, password);
            console.log('user', user);
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid credentials, user not found');
            }
            return user;
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//local strategy is used for login
//jwt is for all other authentications(session based authentication through provision of an accessToken)


/***/ }),

/***/ "./libs/user/src/dto/register.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDTO = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class RegisterDTO {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "password", void 0);
exports.RegisterDTO = RegisterDTO;


/***/ }),

/***/ "./libs/user/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/user/src/lib/user.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/user/src/lib/user.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/user/src/lib/user.module.ts"), exports);


/***/ }),

/***/ "./libs/user/src/lib/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const passport_1 = __webpack_require__("@nestjs/passport");
const user_service_1 = __webpack_require__("./libs/user/src/lib/user.service.ts");
const auth_1 = __webpack_require__("./libs/auth/src/index.ts");
const register_dto_1 = __webpack_require__("./libs/user/src/dto/register.dto.ts");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUserCredentials(username, password);
            console.log('user', user);
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid credentials, user not found');
            }
            return user;
        });
    }
    createUser(params, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username, password } = params;
            // Validate if user already exists
            const isUserU = yield this.userService.findOneByUsername(username);
            // if (isUserU) return res.status(HttpStatus.CONFLICT).json({'message': 'User already exists'});
            if (isUserU) {
                const user = yield this.authService.validateUserCredentials(username, password);
                if (!user) {
                    throw new common_1.UnauthorizedException('Invalid credentials, user not found');
                }
                const token = yield this.authService.loginWithCredentials(user);
                return res.status(common_1.HttpStatus.OK).json({
                    message: 'Login successful',
                    access_token: token,
                    user: user
                }); // Task 1- if a username exists validate and return a token. If a username is not found create a new one
            } // destructuring parameters
            // Validate user inputs
            const validation = this.userService.validateUserInputs(params, res);
            if (validation === true) {
                const user = yield this.userService.create(params);
                if (!user)
                    return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ 'message': 'User could not be created' });
                return res.status(common_1.HttpStatus.OK).json({ 'message': 'User created successfully' });
            }
        });
    }
    getAllUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.randomSecret();
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('signin'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof register_dto_1.RegisterDTO !== "undefined" && register_dto_1.RegisterDTO) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('secret'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
UserController = tslib_1.__decorate([
    (0, common_1.Controller)('v1') // allows grouping of endpoints
    ,
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof auth_1.AuthService !== "undefined" && auth_1.AuthService) === "function" ? _d : Object])
], UserController);
exports.UserController = UserController;
// Endpoints. 


/***/ }),

/***/ "./libs/user/src/lib/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_1 = __webpack_require__("./libs/auth/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const user_controller_1 = __webpack_require__("./libs/user/src/lib/user.controller.ts");
const user_service_1 = __webpack_require__("./libs/user/src/lib/user.service.ts");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            auth_1.AuthModule
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./libs/user/src/lib/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const client_1 = __webpack_require__("@prisma/client");
const bcrypt = __webpack_require__("bcrypt");
const prisma = new client_1.PrismaClient();
let UserService = class UserService {
    create(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { password } = params;
            const hashedPassword = yield bcrypt.hash(password, 10);
            const user = yield prisma.user.create({
                data: Object.assign(Object.assign({}, params), { password: hashedPassword })
            });
            return user;
        });
    }
    findOneByUsername(username) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return prisma.user.findFirst({
                where: {
                    username,
                }
            });
        });
    }
    randomSecret() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const secrets = yield prisma.secret.findMany({});
            const randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
            return randomSecret;
        });
    }
    validateUserInputs(params, res) {
        const { username, password } = params;
        //check if password has a min length of 6 characters
        if (password.length < 6) {
            // throw new Error('Password must be at least 6 characters');
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ 'statusCode': common_1.HttpStatus.BAD_REQUEST, 'message': 'Password must be at least 6 characters' });
        }
        //check if username is a string
        if (typeof username !== 'string') {
            // throw new Error('Username must be a string');
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ 'statusCode': common_1.HttpStatus.BAD_REQUEST, 'message': 'Username must be a string' });
        }
        //check if username has symbols
        if (username.match(/[^a-zA-Z0-9]/)) {
            // throw new Error('Username must be alphanumeric');
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ 'statusCode': common_1.HttpStatus.BAD_REQUEST, 'message': 'Username must be alphanumeric' });
        }
        //check if username has a max length of 100 characters
        if (username.length > 100) {
            // throw new Error('Username must be at most 100 characters');
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ 'statusCode': common_1.HttpStatus.BAD_REQUEST, 'message': 'Username must be at most 100 characters' });
        }
        //check if username has spaces
        if (username.match(/\s/)) {
            // throw new Error('Username must not contain spaces');
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ 'statusCode': common_1.HttpStatus.BAD_REQUEST, 'message': 'Username must not contain spaces' });
        }
        return true;
    }
};
UserService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/web2/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();
//functions reside in the libs folder

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map