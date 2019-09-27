// declare webpack modules
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.less';
declare module '*.scss' {
    interface a {
        [key: string]: string;
    }

    const className: a;

    export = className;
}
declare module '*.sass';
