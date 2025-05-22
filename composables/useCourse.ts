import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  course: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  // 선택한 코스의 값만 가져오기
  // courseSlug가 같은 코스를 찾아 courses에서 반환
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return {
    course,
  };
};
