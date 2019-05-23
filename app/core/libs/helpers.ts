class Helper {
    public static transformX(obj: HTMLElement, x: string): void {
        obj.style.transform = `translate3d(${x}, 0px, 0px)`;
        obj.style.webkitTransform = `translate3d(${x}, 0px, 0px)`;
    }
    public static rotate(obj: HTMLElement, deg: string): void {
        obj.style.transform = `rotate(${deg})`;
        obj.style.webkitTransform = `rotate(${deg})`;
    }
}

export {
    Helper
};
