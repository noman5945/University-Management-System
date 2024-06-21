import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validationMiddleware';
import { AcademicSemesterValidations } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const routes = Router();

routes.post(
  '/create-new-semester',
  auth(USER_ROLE.admin),
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createNewSemester,
);
routes.get('/:semesterId', AcademicSemesterControllers.getSemesterbyId);
export const AcademicSemesterRoutes = routes;
