import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  course: Maybe<CourseWithPath>;
  prevCourse: Maybe<CourseWithPath>;
  nextCourse: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  // 선택한 코스의 값만 가져오기
  // courseSlug가 같은 코스를 찾아 courses에서 반환
  // const course = courses.find((course) => course.courseSlug === courseSlug);

  // 강좌 순번
  const index = courses.findIndex((course) => course.courseSlug === courseSlug);

  // 현재 선택한 강좌
  const course = courses[index];
  // 이전 강좌
  const prevCourse = index <= 0 ? null : courses[index - 1];
  // 다음 강좌
  const nextCourse = index >= courses.length ? null : courses[index + 1];
  return {
    course,
    prevCourse,
    nextCourse,
  };
};
