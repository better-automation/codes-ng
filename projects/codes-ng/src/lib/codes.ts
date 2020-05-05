import { CodesDirective } from './codes-directive';
import { Code } from './code.model';

export function Codes(selector: string) {
    return <T extends { new (...args: any[]): CodesDirective }>(xtor: T) => {
        return class extends xtor {
            set [selector](enabled: boolean) {
                const {
                    component,
                    getCodes
                } = this;

                if (enabled === false) {
                    return;
                }

                component.updateCodes = () => {
                    component.codes = null;

                    Promise.resolve(getCodes.call(this))
                        .then((codes: Code[]) => {
                            component.codes = codes;
                        });
                };
            
                component.updateCodes();
            }
        };
    };
}