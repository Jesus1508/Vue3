import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthSatus, type User } from '../interfaces';
import { checkAuthAction, loginAction, registerAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
    //Authenticated, unAuthenticated, Checking

    const authStatus = ref<AuthSatus>(AuthSatus.Checking);
    const user = ref<User | undefined>();
    const token = ref(useLocalStorage('token', ''));

    const login = async (email: string, password: string) => {
        try {
            const loginResp = await loginAction(email, password);
            if (!loginResp.ok) {
                logout();
                return false;
            }

            user.value = loginResp.user;
            token.value = loginResp.token;
            authStatus.value = AuthSatus.Authenticated;

            return true;
        } catch (error) {
            console.log(error);
            return logout();
        }
    };

    const register = async (fullName: string, email: string, password: string) => {
        try {
            const registerResp = await registerAction(fullName, email, password);

            if (!registerResp.ok) {
                logout();
                return {
                    ok: false,
                    message: registerResp.message,
                };
            }

            user.value = registerResp.user;
            token.value = registerResp.token;
            authStatus.value = AuthSatus.Authenticated;
            return {
                ok: true,
                message: '',
            };
        } catch (error) {
            return {
                ok: false,
                message: 'Error al registrar el usuario',
            };
        }
    };

    const logout = () => {
        authStatus.value = AuthSatus.Unauthenticated;
        user.value = undefined;
        token.value = '';
        return false;
    };

    const checkAuthstatus = async (): Promise<boolean> => {
        try {
            const statusResp = await checkAuthAction();

            if (!statusResp.ok) {
                logout();
                return false;
            }

            authStatus.value = AuthSatus.Authenticated;
            user.value = statusResp.user;
            token.value = statusResp.token;
            return true;
        } catch (error) {
            logout();
            return false;
        }
    };

    return {
        user,
        token,
        authStatus,

        // Getters
        isChecking: computed(() => authStatus.value === AuthSatus.Checking),
        isAuthenticated: computed(() => authStatus.value === AuthSatus.Authenticated),

        // Todo: getter para saber si es Admin o no

        username: computed(() => user.value?.fullName),

        // Actions
        login,
        register,
        checkAuthstatus,
    };
});
