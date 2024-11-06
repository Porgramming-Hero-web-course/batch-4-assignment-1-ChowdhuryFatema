

type Circle = {
    shape: string;
    radius: number;
}
type RectangleArea = {
    shape: string;
    width: number;
    height: number;
} 
type Shape = Circle | RectangleArea;

const calculateShapeArea = (obj: Shape) => {
    if( "radius" in obj){
        return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2)); 
    }
    else if("width" in obj && "height" in obj){
        return obj.height * obj.width;
    }
}
