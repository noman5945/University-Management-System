import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/globalTryCatchFunc';
import { AcademicSemesterServices } from './academicSemester.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createNewSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterServices.createNewSemesterIntoDB(
      req.body,
    );
    res.send({
      statusCode: httpStatus.OK,
      success: true,
      messege: 'Academic Semester created Successfully',
      data: result,
    });
  },
);

const getSemesterbyId = catchAsync(async (req, res, next) => {
  const queryID = req.params.semesterId;
  const result = await AcademicSemesterServices.getSemesterByID(queryID);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Semester retrived by ID. Given ${queryID}`,
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createNewSemester,
  getSemesterbyId,
};
