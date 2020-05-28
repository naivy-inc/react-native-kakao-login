var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { NativeModules } from 'react-native';
var RNKakaoLogins = NativeModules.RNKakaoLogins;
/**
 * KAKAO_ERROR 에러 코드
 * 모든 에러코드가 등록되어있지는 않습니다. 아래의 링크를 참조하세요
 *
 * SHARED   : 공통 에러
 * IOS      : iOS 에러코드
 * ANDROID  : Android 에러코드
 *
 * @url Android : https://developers.kakao.com/docs/android-reference/com/kakao/auth/ApiErrorCode.html
 * @url iOS     : https://developers.kakao.com/docs/ios-reference/KOError_h/index.html#//apple_ref/c/tdef/KOErrorCode
 * */
export var KAKAO_ERROR;
(function (KAKAO_ERROR) {
    // SHARED
    KAKAO_ERROR["E_UNKNOWN"] = "E_UNKNOWN";
    KAKAO_ERROR["E_CANCELLED_OPERATION"] = "E_CANCELLED_OPERATION";
    KAKAO_ERROR["E_ILLEGAL_STATE"] = "E_ILLEGAL_STATE";
    // IOS
    KAKAO_ERROR["E_IN_PROGRESS_OPERATION"] = "E_IN_PROGRESS_OPERATION";
    KAKAO_ERROR["E_TOKEN_NOT_FOUND"] = "E_TOKEN_NOT_FOUND";
    KAKAO_ERROR["E_DEACTIVATED_SESSION"] = "E_DEACTIVATED_SESSION";
    KAKAO_ERROR["E_ALREADY_LOGINED"] = "E_ALREADY_LOGINED";
    KAKAO_ERROR["E_HTTP_ERROR"] = "E_HTTP_ERROR";
    KAKAO_ERROR["E_BAD_RESPONSE"] = "E_BAD_RESPONSE";
    KAKAO_ERROR["E_NETWORK_ERROR"] = "E_NETWORK_ERROR";
    KAKAO_ERROR["E_NOT_SUPPORTED"] = "E_NOT_SUPPORTED";
    KAKAO_ERROR["E_BAD_PARAMETER"] = "E_BAD_PARAMETER";
    // ANDROID
    KAKAO_ERROR["E_ILLEGAL_ARGUMENT"] = "E_ILLEGAL_ARGUMENT";
    KAKAO_ERROR["E_MISS_CONFIGURATION"] = "E_MISS_CONFIGURATION";
    KAKAO_ERROR["E_AUTHORIZATION_FAILED"] = "E_AUTHORIZATION_FAILED";
    KAKAO_ERROR["E_JSON_PARSING_ERROR"] = "E_JSON_PARSING_ERROR";
    KAKAO_ERROR["E_URI_LENGTH_EXCEEDED"] = "E_URI_LENGTH_EXCEEDED";
    KAKAO_ERROR["E_KAKAOTALK_NOT_INSTALLED"] = "E_KAKAOTALK_NOT_INSTALLED";
})(KAKAO_ERROR || (KAKAO_ERROR = {}));
function isFunction(item) {
    return item ? typeof item === 'function' : false;
}
/**
 * login
 * @param {ICallback<ITokenInfo>} [callback] callback function
 * @returns {Promise<ITokenInfo>}
 */
export function login(callback) {
    return RNKakaoLogins.login()
        .then(function (result) {
        var timeReFormattedResult = __assign(__assign({}, result), { accessTokenExpiresAt: result.accessTokenExpiresAt.replace(' ', 'T'), refreshTokenExpiresAt: result.refreshTokenExpiresAt.replace(' ', 'T') });
        if (isFunction(callback)) {
            callback(null, timeReFormattedResult);
        }
        return timeReFormattedResult;
    })
        .catch(function (error) {
        if (isFunction(callback)) {
            callback(error, null);
        }
        throw error;
    });
}
/**
 * logout
 * @param {ICallback<string>} [callback] callback function
 * @returns {Promise<ITokenInfo>}
 */
export function logout(callback) {
    return RNKakaoLogins.logout()
        .then(function (result) {
        if (isFunction(callback)) {
            callback(null, result);
        }
        return result;
    })
        .catch(function (error) {
        if (isFunction(callback)) {
            callback(error, null);
        }
        throw error;
    });
}
/**
 * getProfile
 * @param {ICallback<IProfile>} [callback] callback function. id, nickname, email, display_id, phone_number, email_verified, kakatalk_user, profile_image_path, has_signed_up values will be received with json string in result field.
 * @returns {Promise<ITokenInfo>}
 */
export function getProfile(callback) {
    return RNKakaoLogins.getProfile()
        .then(function (result) {
        if (isFunction(callback)) {
            callback(null, result);
        }
        return result;
    })
        .catch(function (error) {
        if (isFunction(callback)) {
            callback(error, null);
        }
        throw error;
    });
}
var KakaoLogins = {
    login: login,
    logout: logout,
    getProfile: getProfile,
};
export default KakaoLogins;
