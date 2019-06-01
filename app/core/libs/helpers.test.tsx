/* eslint-disable no-magic-numbers */
import { Helpers, _id } from 'core/libs/helpers';

const testTransform = (values: number[]): void => {
    values.forEach((v): void => {
        const div = document.createElement('div');
        Helpers.transformX(div, v);
        expect(div.style.transform).toBe(`translate3d(${v}px, 0px, 0px)`);
        expect(div.style.webkitTransform).toBe(`translate3d(${v}px, 0px, 0px)`);
    });
};

const testRotate = (values: number[]): void => {
    values.forEach((v): void => {
        const div = document.createElement('div');
        Helpers.rotate(div, v);
        expect(div.style.transform).toBe(`rotate(${v}deg)`);
        expect(div.style.webkitTransform).toBe(`rotate(${v}deg)`);
    });
};

const testId = (values: string[], production: boolean): void => {
    __PRODUCTION__ = production;
    values.forEach((v): void => {
        expect(_id(v)).toBe(production ? undefined : v);
    });
};

describe('Helpers tests', (): void => {

    it('should transform', (): void => testTransform([20, 0, -220, 320, 120, -20]));

    it('should rotate', (): void => testRotate([-20, 2, -244, 360, 120, -360, 0]));

    it('should give the correct id', (): void => testId(['options', 'sidemenu'], false));

    it('should give the correct id when prod', (): void => testId(['options', 'sidemenu'], true));

});
