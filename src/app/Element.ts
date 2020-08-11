export class Attribute {
	name: string;
	type: string;
}

export class Element {
	id: number;
	name: string;
	elements: Element[]
	attributes: Attribute[];
	
}