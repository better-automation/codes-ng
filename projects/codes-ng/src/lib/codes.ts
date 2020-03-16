import { CodesDirective } from './codes-directive';
import { Code } from './code.model';

export function Codes(selector: string) {
    let updateCodes: () => void;

    return <T extends { new (...args: any[]): CodesDirective }>(xtor: T) => {
        return class extends xtor {
            set [selector](enabled: boolean) {
                const {
                    component,
                    getCodes
                } = this;

                if (!updateCodes) {
                    updateCodes = () => {
                        component.codes = null;

                        Promise.resolve(getCodes.call(this))
                            .then((codes: Code[]) => {
                                component.codes = codes;
                            });
                    };
                }

                if (enabled === false) {
                    if (component.updateCodes === updateCodes) {
                        component.codes = null;
                        delete component.updateCodes;
                    } 
            
                    return;
                }

                component.updateCodes = updateCodes;

                updateCodes();
            }
        };
    };
}