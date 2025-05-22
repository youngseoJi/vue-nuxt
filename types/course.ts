export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

// Omit : 기존 타입에서 특정 속성을 제외한 지정한 타입을 반환하는 유틸리티 타입
// Omit<T, K> : T에서 K 속성을 제거한 타입을 반환

export interface CourseWithPath
  extends Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'> {
  rating: string;
  reviewsCount: string;
  studentCount: string;
  path: string;
}
// export interface CourseWithPath {
//   title: string;
//   subtitle: string;
//   courseSlug: string;
//   content: string;
//   thumbnail: string;
//   video: string;
//   rating: string;
//   reviewsCount: string;
//   studentCount: string;
//   reviewsUrl: string;
//   inflearnUrl: string;
//   gymcodingUrl: string;
//   path: string;
// }
