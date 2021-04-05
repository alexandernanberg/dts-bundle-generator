export interface CustomType {
	foo: number;
	bar: string;
}
export interface MyType {
	field: CustomType;
}
export declare type MySecondType = MyType | number;

export {};
