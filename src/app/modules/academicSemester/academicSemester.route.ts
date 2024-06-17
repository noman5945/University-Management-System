import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validationMiddleware';
import { AcademicSemesterValidations } from './academicSemester.validation';

const routes = Router();

routes.post(
  '/create-new-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createNewSemester,
);
routes.get('/:semesterId', AcademicSemesterControllers.getSemesterbyId);
export const AcademicSemesterRoutes = routes;
