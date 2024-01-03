import {sum} from "../sum"

test("to test the sum file",()=>{
    const result = sum (5,6)
    expect(result).toBe(11)
})