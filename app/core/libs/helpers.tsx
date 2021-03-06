class Helpers {
    public static transformX(obj: HTMLElement, value: number): void {
        obj.style.transform = `translate3d(${value}px, 0px, 0px)`;
        obj.style.webkitTransform = `translate3d(${value}px, 0px, 0px)`;
    }
    public static rotate(obj: HTMLElement, value: number): void {
        obj.style.transform = `rotate(${value}deg)`;
        obj.style.webkitTransform = `rotate(${value}deg)`;
    }
}

const _id = (name: string): string | undefined => (__PRODUCTION__ ? undefined : name);

export {
    Helpers,
    _id
};
