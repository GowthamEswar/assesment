import React, { useState } from 'react';

function CourseFeesCalculator() {
    const [courseData] = useState({
        'A': { name: 'Course A', fees: 1000 },
        'B': { name: 'Course B', fees: 1500 },
        'C': { name: 'Course C', fees: 1200 },
    });

    const calculateMinimumFees = () => {
        const courses = Object.keys(courseData);
        const n = courses.length;
        const allCoursesMask = (1 << n) - 1;
        const dp = new Array(1 << n).fill(Infinity);

        // Base case: No courses selected
        dp[0] = 0;

        for (let mask = 0; mask <= allCoursesMask; mask++) {
            for (let i = 0; i < n; i++) {
                // Check if course i is not already taken in the subset represented by the mask
                if (!(mask & (1 << i))) {
                    const nextMask = mask | (1 << i);
                    // Update the minimum fees for the subset including course i
                    dp[nextMask] = Math.min(dp[nextMask], dp[mask] + courseData[courses[i]].fees);
                }
            }
        }

        // The result is stored in the last element of the dp array
        return dp[allCoursesMask];
    };

    const minimumFees = calculateMinimumFees();

    const renderCourses = () => {
        return Object.entries(courseData).map(([key, course]) => (
            <li key={key}>
                <strong>{course.name}</strong>: ${course.fees}
            </li>
        ));
    };

    return (
        <div>
            <h2>Minimum Fees Calculator</h2>
            <ul>
                {renderCourses()}
            </ul>
            <p>Minimum Fees for Rahul: {minimumFees}</p>
        </div>
    );
}

export default CourseFeesCalculator;
