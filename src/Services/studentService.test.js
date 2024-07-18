import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getStudent,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  API_URL,
} from "./studentService";

const mock = new MockAdapter(axios);

const students = [
  { id: "as3b", name: "Tural", surname: "Turalli" },
  { id: "df1a", name: "Revan", surname: "Hacizade" },
];

describe("Student Service", () => {
  it("fetches all students", async () => {
    mock.onGet(API_URL).reply(200, students);
    console.log(students);
    const response = await getStudents();
    console.log(response.data);
    expect(response.data).toEqual(students);
  });

  it("fetches a single student by ID", async () => {
    mock.onGet(`${API_URL}/as3b`).reply(200, students[0]);
    const response = await getStudent("as3b");
    expect(response.data).toEqual(students[0]);
  });

  it("creates a new student", async () => {
    const newStudent = { id: "wq3e", name: "Mehemmed", surname: "Hemzeyev" };
    mock.onPost(API_URL).reply(201, newStudent);
    const response = await createStudent(newStudent);
    expect(response.data).toEqual(newStudent);
  });

  it("updates an existing student", async () => {
    const updatedStudent = { id: "as3b", name: "Arif", surname: "Turalli" };
    mock.onPut(`${API_URL}/as3b`).reply(200, updatedStudent);
    const response = await updateStudent("as3b", updatedStudent);
    expect(response.data).toEqual(updatedStudent);
  });

  it("deletes a student", async () => {
    mock.onDelete(`${API_URL}/as3b`).reply(200);
    const response = await deleteStudent("as3b");
    expect(response.status).toBe(200);
  });
});
