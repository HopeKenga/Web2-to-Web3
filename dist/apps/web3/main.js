/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/web3/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/web3/src/app/app.service.ts");
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

/***/ "./apps/web3/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const challengecode_1 = __webpack_require__("./libs/challengecode/src/index.ts");
const d_auth_1 = __webpack_require__("./libs/d-auth/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/web3/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/web3/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            d_auth_1.DAuthModule,
            challengecode_1.ChallengecodeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/web3/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to web3!' };
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

/***/ "./libs/challengecode/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/challengecode/src/lib/challengecode.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/challengecode/src/lib/challengecode.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/challengecode/src/lib/challengecode.module.ts"), exports);


/***/ }),

/***/ "./libs/challengecode/src/lib/challengecode.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengecodeController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const challengecode_service_1 = __webpack_require__("./libs/challengecode/src/lib/challengecode.service.ts");
let ChallengecodeController = class ChallengecodeController {
    constructor(challengecodeService) {
        this.challengecodeService = challengecodeService;
    }
    getChallengeCode(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { address } = req;
            return yield this.challengecodeService.getChallengeCode(address);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('challengecode'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengecodeController.prototype, "getChallengeCode", null);
ChallengecodeController = tslib_1.__decorate([
    (0, common_1.Controller)('v1'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof challengecode_service_1.ChallengecodeService !== "undefined" && challengecode_service_1.ChallengecodeService) === "function" ? _a : Object])
], ChallengecodeController);
exports.ChallengecodeController = ChallengecodeController;


/***/ }),

/***/ "./libs/challengecode/src/lib/challengecode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengecodeModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const challengecode_controller_1 = __webpack_require__("./libs/challengecode/src/lib/challengecode.controller.ts");
const challengecode_service_1 = __webpack_require__("./libs/challengecode/src/lib/challengecode.service.ts");
let ChallengecodeModule = class ChallengecodeModule {
};
ChallengecodeModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [challengecode_controller_1.ChallengecodeController],
        providers: [challengecode_service_1.ChallengecodeService],
        exports: [challengecode_service_1.ChallengecodeService],
    })
], ChallengecodeModule);
exports.ChallengecodeModule = ChallengecodeModule;


/***/ }),

/***/ "./libs/challengecode/src/lib/challengecode.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengecodeService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const client_1 = __webpack_require__("@prisma/client");
const prisma = new client_1.PrismaClient();
let ChallengecodeService = class ChallengecodeService {
    getChallengeCode(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //check if a challenge code exists
            const verifyChallenge = yield this.verifyChallengeCode(address);
            if (verifyChallenge === false) {
                //add a new challenge code
                return this.addChallenge(address);
            }
            //return the challenge code
            const result = yield prisma.challenge.findFirst({
                where: {
                    usedAt: null,
                    requester: address
                }
            });
            return result;
        });
    }
    verifyChallengeCode(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //check if challengecode is valid
            const result = yield prisma.challenge.findFirst({
                where: {
                    usedAt: null,
                    requester: address
                }
            });
            if (result) {
                //check if challengecode is expired after 5 minutes
                const now = new Date();
                const createdAt = new Date(result.createdAt);
                let diff = (now.getTime() - createdAt.getTime()) / 1000;
                diff /= 60;
                const minutes = Math.abs(Math.round(diff));
                if (minutes > 3) {
                    //update challengecode to expired
                    yield prisma.challenge.update({
                        where: {
                            id: result.id
                        },
                        data: {
                            usedAt: new Date()
                        }
                    });
                    return false;
                }
                return true;
            }
            return false;
        });
    }
    addChallenge(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //make a random string
            const challenge = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const addChallenge = {
                challenge: challenge,
                requester: address
            };
            //store the challenge in the database
            const result = yield prisma.challenge.create({
                data: addChallenge
            });
            return result;
        });
    }
};
ChallengecodeService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ChallengecodeService);
exports.ChallengecodeService = ChallengecodeService;


/***/ }),

/***/ "./libs/d-auth/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/d-auth/src/lib/d-auth.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/d-auth/src/lib/d-auth.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/d-auth/src/lib/d-auth.module.ts"), exports);


/***/ }),

/***/ "./libs/d-auth/src/lib/d-auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DAuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_1 = __webpack_require__("./libs/auth/src/index.ts");
const user_1 = __webpack_require__("./libs/user/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const d_auth_service_1 = __webpack_require__("./libs/d-auth/src/lib/d-auth.service.ts");
let DAuthController = class DAuthController {
    constructor(dAuthService, authService, userService) {
        this.dAuthService = dAuthService;
        this.authService = authService;
        this.userService = userService;
    }
    signin(params, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isValid = yield this.dAuthService.signin(params);
            // return isValid;
            if (isValid === true) {
                const token = yield this.authService.loginWithCredentials(params.username);
                return res.status(common_1.HttpStatus.OK).json({
                    message: 'Login successful',
                    access_token: token,
                    user: params.username
                });
            }
            else {
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                    statusCode: common_1.HttpStatus.UNAUTHORIZED,
                    message: 'Invalid signature'
                });
            }
        });
    }
    signinTask3(params, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isValid = yield this.dAuthService.signinTask3(params);
            // return isValid;
            if (isValid === true) {
                const token = yield this.authService.loginWithCredentials(params.username);
                return res.status(common_1.HttpStatus.OK).json({
                    message: 'Login successful',
                    access_token: token,
                    user: params.username
                });
            }
            else {
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                    statusCode: common_1.HttpStatus.UNAUTHORIZED,
                    message: 'Invalid signature'
                });
            }
        });
    }
    //get a challenge code generated after every 3 minutes of randomly generated string. If the string is not used within 3 minutes it can be used,
    // if 3 minutes have exceeded then you issue a new challenge code
    getAllUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.randomSecret();
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('signin'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Response)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DAuthController.prototype, "signin", null);
tslib_1.__decorate([
    (0, common_1.Post)('signin-task3'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Response)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DAuthController.prototype, "signinTask3", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('secret'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], DAuthController.prototype, "getAllUsers", null);
DAuthController = tslib_1.__decorate([
    (0, common_1.Controller)('v1'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof d_auth_service_1.DAuthService !== "undefined" && d_auth_service_1.DAuthService) === "function" ? _a : Object, typeof (_b = typeof auth_1.AuthService !== "undefined" && auth_1.AuthService) === "function" ? _b : Object, typeof (_c = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _c : Object])
], DAuthController);
exports.DAuthController = DAuthController;


/***/ }),

/***/ "./libs/d-auth/src/lib/d-auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DAuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_1 = __webpack_require__("./libs/auth/src/index.ts");
const user_1 = __webpack_require__("./libs/user/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const d_auth_controller_1 = __webpack_require__("./libs/d-auth/src/lib/d-auth.controller.ts");
const d_auth_service_1 = __webpack_require__("./libs/d-auth/src/lib/d-auth.service.ts");
let DAuthModule = class DAuthModule {
};
DAuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            auth_1.AuthModule,
            user_1.UserModule
        ],
        controllers: [d_auth_controller_1.DAuthController],
        providers: [d_auth_service_1.DAuthService],
        exports: [d_auth_service_1.DAuthService],
    })
], DAuthModule);
exports.DAuthModule = DAuthModule;


/***/ }),

/***/ "./libs/d-auth/src/lib/d-auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DAuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const util_1 = __webpack_require__("@polkadot/util");
const util_crypto_1 = __webpack_require__("@polkadot/util-crypto");
const client_1 = __webpack_require__("@prisma/client");
const prisma = new client_1.PrismaClient();
let DAuthService = class DAuthService {
    isValidSignature(signedMessage, signature, address) {
        const publicKey = (0, util_crypto_1.decodeAddress)(address);
        const hexPublicKey = (0, util_1.u8aToHex)(publicKey);
        //polkadot(verify if signature is valid)
        return (0, util_crypto_1.signatureVerify)(signedMessage, signature, hexPublicKey).isValid;
    }
    signin(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { message, signature, username } = params;
            const isValid = this.isValidSignature(message, signature, username);
            return isValid;
        });
    }
    signinTask3(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { message, signature, username, challengeCode } = params;
            const isValid = this.isValidSignature(message, signature, username);
            //check if challenge exists
            if (isValid === true) {
                const result = yield prisma.challenge.findFirst({
                    where: {
                        usedAt: null,
                        requester: username,
                        challenge: challengeCode
                    }
                });
                if (result) {
                    //update challengecode to expired
                    yield prisma.challenge.update({
                        where: {
                            id: result.id
                        },
                        data: {
                            usedAt: new Date()
                        }
                    });
                    return true;
                }
            }
            return false;
        });
    }
};
DAuthService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DAuthService);
exports.DAuthService = DAuthService;


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

/***/ "@polkadot/util":
/***/ ((module) => {

module.exports = require("@polkadot/util");

/***/ }),

/***/ "@polkadot/util-crypto":
/***/ ((module) => {

module.exports = require("@polkadot/util-crypto");

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
const app_module_1 = __webpack_require__("./apps/web3/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 4444;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map