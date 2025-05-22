import coursesData from './courseData';
import type { CourseWithPath } from '~/types/course';

// return 타입 정의
// CourseReturn 인터페이스 정의
// courses 속성은 Course[] 타입

interface CourseReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CourseReturn => {
  const courses = coursesData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1), // 5-> 5.0
    reviewsCount: item.reviewsCount.toLocaleString(), // 1000 -> 1,000
    studentCount: item.studentCount.toLocaleString(), // 2266 -> 2,266
    path: `/course/${item.courseSlug}`, // courses/코스슬러그
  }));
  return {
    courses,
  };
};
