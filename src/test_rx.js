import {map} from "rxjs/operators";
import {of} from "rxjs";

map(x => x * 2)(of(1, 2, 3, 4, 5)).subscribe((x) => console.log(`Output is ${x}`))