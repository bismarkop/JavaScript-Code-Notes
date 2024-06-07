// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
// };

// const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//         {
//             id: 1,
//             name: "Declare a Variable",
//             due_at: "2023-01-25",
//             points_possible: 50
//         },
//         {
//             id: 2,
//             name: "Write a Function",
//             due_at: "2023-02-27",
//             points_possible: 150
//         },
//         {
//             id: 3,
//             name: "Code the World",
//             due_at: "3156-11-15",
//             points_possible: 500
//         }
//     ]
// };

// const LearnerSubmissions = [
//     {
//         learner_id: 125,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 47
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-02-12",
//             score: 150
//         }
//     },
//     {
//         learner_id: 125,
//         assignment_id: 3,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 400
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-24",
//             score: 39
//         }
//     },
//     {
//         learner_id: 132,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-03-07",
//             score: 140
//         }
//     }
// ];

// // Create a map for assignment points possible
// const assignmentPointsMap = AssignmentGroup.assignments.reduce((map, assignment) => {
//     map[assignment.id] = assignment.points_possible;
// //  the key(assignment id) = the value (points_possible)
//     return map;
// }, {});
// console.log(assignmentPointsMap) // { '1': 50, '2': 150, '3': 500 }

// // Initialize the final grades data structure
// const finalGrades = {};

// // Process each submission
// LearnerSubmissions.forEach(submission => {
//     const { learner_id, assignment_id, submission: { score } } = submission;
//     console.log(submission)
//     const pointsPossible = assignmentPointsMap[assignment_id];
//     console.log(pointsPossible)
//     const percentageScore = (score / pointsPossible) * 100;
//     console.log(percentageScore)

//     if (!finalGrades[learner_id]) {
//         finalGrades[learner_id] = {};
//     }

//     finalGrades[learner_id][assignment_id] = percentageScore;
// });

// // console.log(finalGrades);



// // The provided course information.
// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript",
// };

// // The provided assignment group.
// const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//         {
//             id: 1,
//             name: "Declare a Variable",
//             due_at: "2023-01-25",
//             points_possible: 50,
//         },
//         {
//             id: 2,
//             name: "Write a Function",
//             due_at: "2023-02-27",
//             points_possible: 150,
//         },
//         {
//             id: 3,
//             name: "Code the World",
//             due_at: "3156-11-15",
//             points_possible: 500,
//         },
//     ],
// };

// // The provided learner submission data.
// const LearnerSubmissions = [
//     {
//         learner_id: 125,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 47,
//         },
//     },
//     {
//         learner_id: 125,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-02-12",
//             score: 150,
//         },
//     },
//     {
//         learner_id: 125,
//         assignment_id: 3,
//         submission: {
//             submitted_at: "2023-01-25",
//             score: 400,
//         },
//     },
//     {
//         learner_id: 132,
//         assignment_id: 1,
//         submission: {
//             submitted_at: "2023-01-24",
//             score: 39,
//         },
//     },
//     {
//         learner_id: 132,
//         assignment_id: 2,
//         submission: {
//             submitted_at: "2023-03-07",
//             score: 140,
//         },
//     },
// ];

// for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
//     console.log(AssignmentGroup.assignments[i])

//     for (let j = 0; j < LearnerSubmissions.length; j++) {
//         console.log(AssignmentGroup[i], LearnerSubmissions[j])
//     }
// }