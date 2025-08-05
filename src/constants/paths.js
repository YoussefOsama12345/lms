
const ROUTES = {
  USER: {
     CREATE_USER:"/users/create-user",
     DELETE_USER:"/users/delete-user/:userId",
     UPDATE_USER:"/users/update-user/:userId",
     GET_USER:"/users/get-user/:userId",
     GET_ALL_USERS:"/users/get-all-users"
  },

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    GOOGLE: "/auth/google",
    GOOGLE_CALLBACK: "/auth/google/callback",
    FACEBOOK: "/auth/facebook",
    FACEBOOK_CALLBACK: "/auth/facebook/callback",
    LINKEDIN: "/auth/linkedin",
    LINKEDIN_CALLBACK: "/auth/linkedin/callback",
    GITHUB: "/auth/github",
    GITHUB_CALLBACK: "/auth/github/callback"
  },

  COURSE: {
    CREATE_COURSE:"/courses/create-course",
    DELETE_COURSE:"/courses/delete-course/:courseId",
    UPDATE_COURSE:"/courses/update-course/:courseId",
    GET_COURSE:"/courses/get-course/:courseId",
    GET_ALL_COURSES:"/courses/get-all-courses"
  },

  CERTIFICATE: {
    CREATE_CERTIFICATE: "/certificates/create-certificate",
    DELETE_CERTIFICATE: "/certificates/delete-certificate/:certificateId",
    UPDATE_CERTIFICATE: "/certificates/update-certificate/:certificateId",
    GET_CERTIFICATE: "/certificates/get-certificate/:certificateId",
    GET_ALL_CERTIFICATES: "/certificates/get-all-certificates"
  },

  LESSON: {
    CREATE_LESSON: "/lessons/create-lesson",
    DELETE_LESSON: "/lessons/delete-lesson/:lessonId",
    UPDATE_LESSON: "/lessons/update-lesson/:lessonId",
    GET_LESSON: "/lessons/get-lesson/:lessonId",
    GET_ALL_LESSONS: "/lessons/get-all-lessons"
  },

  CATEGORY : {
    CREATE_CATEGORY : "/categories/create-category",
    DELETE_CATEGORY: "/categories/delete-category/:categoryId",
    UPDATE_CATEGORY: "/categories/update-category/:categoryId",
    GET_CATEGORY: "/categories/get-category/:categoryId",
    GET_ALL_CATEGORIES: "/categories/get-all-categories"
  },

  REVIEW: {
    CREATE_REVIEW: "/reviews/create-review",
    DELETE_REVIEW: "/reviews/delete-review/:reviewId",
    UPDATE_REVIEW: "/reviews/update-review/:reviewId",
    GET_REVIEW: "/reviews/get-review/:reviewId",
    GET_ALL_REVIEWS: "/reviews/get-all-reviews"
  },

  QUIZ: {
    CREATE_QUIZ: "/quizzes/create-quiz",
    DELETE_QUIZ: "/quizzes/delete-quiz/:quizId",
    UPDATE_QUIZ: "/quizzes/update-quiz/:quizId",
    GET_QUIZ: "/quizzes/get-quiz/:quizId",
    GET_ALL_QUIZZES: "/quizzes/get-all-quizzes"
  },

  ASSIGNMENT: {
    CREATE_ASSIGNMENT: "/assignments/create-assignment",
    DELETE_ASSIGNMENT: "/assignments/delete-assignment/:assignmentId",
    UPDATE_ASSIGNMENT: "/assignments/update-assignment/:assignmentId",
    GET_ASSIGNMENT: "/assignments/get-assignment/:assignmentId",
    GET_ALL_ASSIGNMENTS: "/assignments/get-all-assignments"
  },

  PROGRESS: {
    GET_COURSE_PROGRESS: "/progress/:userId/course/:courseId",
    SET_MARKDOWN: "/progress/markdown"
  },

  UPLOAD: {
    UPLOAD_FILE: "/upload"
  },

  WISHLIST: {
    ADD_TO_WISHLIST: "/wishlists/add/:courseId",
    REMOVE_FROM_WISHLIST: "/wishlists/remove/:courseId",
    GET_USER_WISHLIST: "/wishlists/user/:userId",
  },

  SECTION: {
    CREATE_SECTION: "/sections/create-section",
    DELETE_SECTION: "/sections/delete-section/:sectionId",
    UPDATE_SECTION: "/sections/update-section/:sectionId",
    GET_SECTION: "/sections/get-section/:sectionId",
    GET_ALL_SECTIONS: "/sections/get-all-sections",
    GET_SECTIONS_BY_COURSE: "/sections/course/:courseId"
  },

  ENROLLMENT: {
    ENROLL_IN_COURSE: "/enrollments/enroll/:courseId",
    CANCEL_ENROLLMENT: "/enrollments/cancel/:courseId",
    GET_USER_ENROLLMENTS: "/enrollments/user/:userId",
    GET_COURSE_ENROLLMENTS: "/enrollments/course/:courseId"
 },

  ORDER: {
    CREATE_ORDER: "/orders/create-order",
    CANCEL_ORDER: "/orders/cancel-order/:orderId",
    GET_ORDER: "/orders/get-order/:orderId",
    GET_USER_ORDERS: "/orders/user/:userId",
    GET_ALL_ORDERS: "/orders/get-all-orders"
  },

  COUPON: {
    CREATE_COUPON: "/coupons/create-coupon",
    DELETE_COUPON: "/coupons/delete-coupon/:couponId",
    UPDATE_COUPON: "/coupons/update-coupon/:couponId",
    GET_COUPON: "/coupons/get-coupon/:couponId",
    GET_ALL_COUPONS: "/coupons/get-all-coupons",
    APPLY_COUPON: "/coupons/apply"
  }
}

module.exports = ROUTES
