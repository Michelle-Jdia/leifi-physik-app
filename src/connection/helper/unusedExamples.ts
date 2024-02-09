/* eslint-disable */

/**
 * To have a central place of possible useful functions and to keep codebase free of random comments,
 * this file will contain snippets of code that could be useful or worthy of studying in order to learn more about Typescript
 * ideally with comment/comments about what goes on in the snippet
 */



/**
 *  filters out includedData of stuff that isn't of type TaxonomyTermColor,
 *  then finds items in the result where id == colorid, and return an object of type ColorApi
 */
// const colorInRamda = find<ColorApi>(propEq('id', colorId))(filter(isTaxonomyTermColor, includedData));

// example how to use without fetcher
// import { shallowRef } from 'vue';
// import type { ShallowRef } from 'vue';
// export function useBranch2(input: ReadBranchInput) {
//     const result: ShallowRef<Branch | void> = shallowRef();
//
//     return {
//         data: result,
//         async getData() {
//             const storageData = await $useBranchStorage.read(input);
//
//             result.value = storageData;
//
//             const { data } = await $readBranch(input);
//             const firstItem = data.data[0];
//             const branch = createBranch(firstItem);
//
//             $useBranchStorage.write(branch);
//             result.value = branch;
//         },
//     };
// }


// async getLiveData() {
//     const storageData = await storageHandler.read(input);
//
//     if (storageData) {
//         data.value = storageData;
//     }
//
//     const response = await callback(input);
//
//     storageHandler.write(response, input);
//
//     data.value = response;
//
//     return data.value;
// },
// async getCacheData() {
//     const storageData = await storageHandler.read(input);
//
//     if (!storageData) {
//         return;
//     }
//
//     data.value = storageData;
//
//     return data.value;
// },




// // typing and checking object types
// import {Issue} from "@/data/type/app/issue";
// import {Task} from "@/data/type/app/task";
// import {Download} from "@/data/type/app/download";
//
// enum Types {
//     ISSUE = 'node--issue',
//     TASK = 'node--task',
//     DOWNLOAD = 'node--download',
// }
//
// function isIssueStringType(input: string ): input is Types.ISSUE {
//     return input === Types.ISSUE;
// }
// function isIssueObjectType(input: Issue | Task | Download): input is Issue {
//     return input.type === Types.ISSUE
// }
//
// function functionThatTakesOnlyIssueOrTask(object: Issue | Task) {
//     if (isIssueObjectType(object)) {
//         // do something specific to issue
//         object.issue_category;
//     }
// }
//
// // the inputString can be any string, or a union of strings. ex: type MyUnion = 'node--issue' | 'node--task';
// // or even better, can use the enum. ex: type MyUnion = Types.ISSUE | Types.TASK;
// function functionThatTakesATypeStringIssueOrTask(inputString: string){
//     if (inputString === Types.ISSUE) {
//         // inputstring is surely 'node--issue'
//         console.log(inputString);
//     }
// }