// let nextLink = data.links.next;
// let allBranches = {} as ReadBranchOutput;

// allBranches = {
//     ...data
// };

// while (nextLink) {
//     const { data } = await $readBranches({
//         link: nextLink,
//     });

//     allBranches = {
//         ...allBranches,
//         ...data,
//     };

//     nextLink = data.links.next;
// }

// async function getDataFromAllNextLinks<O>(callback: (input?: I) => Promise<O>,): Promise<O> {
// const { data } = await $readBranches();

// let nextLink = data.links.next;
// let allBranches = {} as ReadBranchOutput;

// allBranches = {
//     ...data
// };

// while (nextLink) {
//     const { data } = await $readBranches({
//         link: nextLink,
//     });

//     allBranches = {
//         ...allBranches,
//         ...data,
//     };

//     nextLink = data.links.next;
// }
// }

// async function getData() {
//     const data = await getPagination((input) => $readBranches(input));
//     console.log(data);
// }
