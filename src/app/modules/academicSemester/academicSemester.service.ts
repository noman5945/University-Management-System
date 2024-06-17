import { AcademicSemesterCodeMapper } from './academicSemester.constants';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createNewSemesterIntoDB = async (payload: TAcademicSemester) => {
  /**
   * TO DO: Check if the given semester code is equal to business logic semester code
   */
  if (AcademicSemesterCodeMapper[payload.name] !== payload.code) {
    throw new Error('Wrong Semester code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getSemesterByID = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};

export const AcademicSemesterServices = {
  createNewSemesterIntoDB,
  getSemesterByID,
};
