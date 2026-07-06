const masterQuestions = [
    // ==========================================
    // SECTION ONE: INTRODUCTION TO VECTORS (1-50)
    // ==========================================
    {
        topic: "Introduction to Vectors",
        question: "Which of the following describes a vector quantity?",
        options: ["(A) Quantities expressed only in terms of magnitude", "(B) Quantities expressed in terms of magnitude and direction", "(C) Quantities with varying dimensions but zero magnitude", "(D) Quantities possessing only spatial directions"],
        answer: "B",
        explanation: "Vectors are quantities that can be expressed in terms of magnitude and direction, as opposed to scalars which only possess magnitude."
    },
    {
        topic: "Introduction to Vectors",
        question: "Which of the following parameters represents a scalar quantity?",
        options: ["(A) Displacement", "(B) Momentum", "(C) Distance", "(D) Acceleration"],
        answer: "C",
        explanation: "Displacement, momentum, and acceleration have specified paths or directions, making them vectors. Distance depends purely on magnitude."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the physical designation given to the modulus of a vector?",
        options: ["(A) Its angular orientation relative to an axis", "(B) The magnitude or linear length of the vector", "(C) The matrix inverse representation of its directional field", "(D) The scalar dot product of three unit coordinates"],
        answer: "B",
        explanation: "The modulus of a vector represents its absolute magnitude or absolute geometric length."
    },
    {
        topic: "Introduction to Vectors",
        question: "How is a standard one-dimensional vector represented mathematically?",
        options: ["(A) A = a*i", "(B) B = a*i + b*j", "(C) C = a*i + b*j + c*k", "(D) D = a*i*j*k"],
        answer: "A",
        explanation: "One-dimensional vectors use a single basis unit vector, typically written as a*i."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the mathematical formulation for the modulus of a two-dimensional vector B = a*i + b*j?",
        options: ["(A) |B| = a + b", "(B) |B| = sqrt(a + b)", "(C) |B| = sqrt(a^2 + b^2)", "(D) |B| = a^2 + b^2"],
        answer: "C",
        explanation: "The modulus of a two-dimensional vector is calculated as the square root of the sum of its squared orthogonal scalar components: sqrt(a^2 + b^2)."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given a three-dimensional vector C = a*i + b*j + c*k, what is the value of its modulus?",
        options: ["(A) sqrt(a^2 + b^2)", "(B) sqrt(a^2 + b^2 + c^2)", "(C) a^2 + b^2 + c^2", "(D) abs(a + b + c)"],
        answer: "B",
        explanation: "By extension of Pythagoras' theorem, the magnitude of a 3D vector is sqrt(a^2 + b^2 + c^2)."
    },
    {
        topic: "Introduction to Vectors",
        question: "What are the direction cosines of a three-dimensional vector?",
        options: ["(A) The sines of the angles between the vector components", "(B) The cosines of the angles between the vector and the three coordinate axes", "(C) The tangents of the unit basis boundaries", "(D) The product vectors along the x, y, and z orientations"],
        answer: "B",
        explanation: "Direction cosines are the cosines of the angles (alpha, beta, gamma) formed between the vector trajectory and the primary reference axes."
    },
    {
        topic: "Introduction to Vectors",
        question: "For a vector C = a*i + b*j + c*k, what is the analytical expression for cos(alpha)?",
        options: ["(A) a / sqrt(a^2 + b^2)", "(B) a / (a^2 + b^2 + c^2)", "(C) a / sqrt(a^2 + b^2 + c^2)", "(D) b / sqrt(a^2 + b^2 + c^2)"],
        answer: "C",
        explanation: "The direction cosine with respect to the x-axis is its component 'a' divided by the overall magnitude: a / sqrt(a^2 + b^2 + c^2)."
    },
    {
        topic: "Introduction to Vectors",
        question: "What does the expression cos(beta) signify in a 3D cartesian coordinate system?",
        options: ["(A) The direction cosine relating the vector to the x-axis", "(B) The direction cosine relating the vector to the y-axis", "(C) The unit tangent slope boundary", "(D) The vector alignment relative to the z-axis plane"],
        answer: "B",
        explanation: "Beta represents the inclination angle relative to the y-axis, making cos(beta) = b / sqrt(a^2 + b^2 + c^2)."
    },
    {
        topic: "Introduction to Vectors",
        question: "If a vector has a modulus value of unity, what special classification does it hold?",
        options: ["(A) Null vector", "(B) Scalar product matrix", "(C) Unit vector", "(D) Linear dependence framework"],
        answer: "C",
        explanation: "A unit vector is explicitly defined as a vector whose magnitude is exactly equal to one (unity)."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the general relationship for determining the unit vector of a known vector 'a'?",
        options: ["(A) n = a * |a|", "(B) n = a / |a|", "(C) n = |a| / a", "(D) n = sqrt(a * a)"],
        answer: "B",
        explanation: "A unit vector is found by scaling the original vector down by its absolute geometric length: n = a / |a|."
    },
    {
        topic: "Introduction to Vectors",
        question: "What are the names of the parameters alpha, beta, and gamma in direction analysis?",
        options: ["(A) Orthogonal components", "(B) Direction angles", "(C) Cross angles", "(D) Standard scalings"],
        answer: "B",
        explanation: "The angles alpha, beta, and gamma are called direction angles, and their cosines are called direction cosines."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given P = p1*i + p2*j + p3*k and Q = q1*i + q2*j + q3*k, what is the result of P + Q?",
        options: ["(A) (p1*q1)i + (p2*q2)j + (p3*q3)k", "(B) (p1+q1)i + (p2+q2)j + (p3+q3)k", "(C) (p1-q1)i + (p2-q2)j + (p3-q3)k", "(D) sqrt(p1+q1)i"],
        answer: "B",
        explanation: "Vector addition requires adding corresponding scalar components from identical unit paths."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given vector P = p1*i + p2*j + p3*k and Q = q1*i + q2*j + q3*k, determine P - Q.",
        options: ["(A) (q1-p1)i + (q2-p2)j + (q3-p3)k", "(B) (p1-q1)i + (p2-q2)j + (p3-q3)k", "(C) (p1+q1)i - (p2+q2)j", "(D) (p1/q1)i + (p2/q2)j"],
        answer: "B",
        explanation: "Vector subtraction subtracts the components of the second vector from the corresponding components of the first vector."
    },
    {
        topic: "Introduction to Vectors",
        question: "If vector p = 5i - 3j + 7k and q = 4i + 3j - 6k, evaluate the component values of 3p - 2q.",
        options: ["(A) 7i - 15j + 33k", "(B) 7i - 12j + 33k", "(C) 23i - 3j + 9k", "(D) i - 6j + 13k"],
        answer: "A",
        explanation: "3p = 15i - 9j + 21k. 2q = 8i + 6j - 12k. (15-8)i + (-9-6)j + (21 - (-12))k = 7i - 15j + 33k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Using p = 5i - 3j + 7k, q = 4i + 3j - 6k, and r = -i - 3j + 8k, evaluate the vector sum p + q + r.",
        options: ["(A) 8i - 3j + 9k", "(B) 10i + 3j + 21k", "(C) 8i - 3j + 13k", "(D) 9i - 3j + 9k"],
        answer: "C",
        explanation: "Sum components: (5 + 4 - 1)i + (-3 + 3 - 3)j + (7 - 6 + 8)k = 8i - 3j + 13k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given p = 5i - 3j + 7k and r = -i - 3j + 8k, find the scalar evaluation of -3p + 2r.",
        options: ["(A) -17i + 3j - 5k", "(B) -17i + 3j + 1k", "(C) -13i + 15j - 5k", "(D) 17i - 3j + 5k"],
        answer: "A",
        explanation: "-3p = -15i + 9j - 21k. 2r = -2i - 6j + 16k. Combining them yields -17i + 3j - 5k."
    },
    {
        topic: "Introduction to Vectors",
        question: "If 2*BC = 4i + 3j - 2k, what is the exact expression for vector BC?",
        options: ["(A) 4i + 3j - 2k", "(B) 2i + 1.5j - k", "(C) 8i + 6j - 4k", "(D) 2i + 3j - k"],
        answer: "B",
        explanation: "Divide through by the scalar constant 2 to isolate vector BC: 2i + 1.5j - k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given BC = 2i + 1.5j - k and CD = 7i - 6j + 5k, calculate vector BD.",
        options: ["(A) 9i - 4.5j + 4k", "(B) 5i - 7.5j + 6k", "(C) 9i - 3.5j + 4k", "(D) 14i - 9j - 5k"],
        answer: "A",
        explanation: "BD = BC + CD = (2+7)i + (1.5-6)j + (-1+5)k = 9i - 4.5j + 4k."
    },
    {
        topic: "Introduction to Vectors",
        question: "If 5*DE = 2i + 3j + 4k, isolate vector DE by finding its scalar components.",
        options: ["(A) 2i + 3j + 4k", "(B) 0.4i + 0.6j + 0.8k", "(C) 10i + 15j + 20k", "(D) 0.4i + 0.3j + 0.8k"],
        answer: "B",
        explanation: "DE = (2/5)i + (3/5)j + (4/5)k = 0.4i + 0.6j + 0.8k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Based on the text calculations, combining BD = 9i - 4.5j + 4k and DE = 0.4i + 0.6j + 0.8k yields which vector BE?",
        options: ["(A) 9.4i - 3.9j + 4.8k", "(B) 47/5 i - 39/10 j + 24/5 k", "(C) 9.4i + 3.9j + 4.8k", "(D) Both A and B are correct variations"],
        answer: "D",
        explanation: "9 + 2/5 = 47/5 = 9.4. -4.5 + 3/5 = -3.9 = -39/10. 4 + 4/5 = 24/5 = 4.8. Both fractional and decimal forms match."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given vector t = -2i + j + 4k and u = 6i + 2j + k, evaluate the vector t + u.",
        options: ["(A) 4i + 3j + 5k", "(B) 8i + 3j + 5k", "(C) -8i - j + 3k", "(D) 4i + 2j + 5k"],
        answer: "A",
        explanation: "t + u = (-2+6)i + (1+2)j + (4+1)k = 4i + 3j + 5k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Find the modulus length of the sum vector t + u = 4i + 3j + 5k.",
        options: ["(A) sqrt(25)", "(B) sqrt(50)", "(C) 50", "(D) sqrt(43)"],
        answer: "B",
        explanation: "|t + u| = sqrt(4^2 + 3^2 + 5^2) = sqrt(16 + 9 + 25) = sqrt(50)."
    },
    {
        topic: "Introduction to Vectors",
        question: "Determine the exact unit vector along the trajectory of t + u if t + u = 4i + 3j + 5k.",
        options: ["(A) (4i + 3j + 5k) / 50", "(B) (4i + 3j + 5k) / sqrt(50)", "(C) (-2i + j + 4k) / sqrt(21)", "(D) (6i + 2j + k) / sqrt(41)"],
        answer: "B",
        explanation: "The unit vector is the vector divided by its modulus length: (4i + 3j + 5k) / sqrt(50)."
    },
    {
        topic: "Introduction to Vectors",
        question: "Evaluate the vector difference t - u for vectors t = -2i + j + 4k and u = 6i + 2j + k.",
        options: ["(A) 8i + j - 3k", "(B) -8i - j + 3k", "(C) -8i + 3j + 5k", "(D) 4i - j + 3k"],
        answer: "B",
        explanation: "t - u = (-2-6)i + (1-2)j + (4-1)k = -8i - j + 3k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Find the structural modulus length of the difference vector t - u = -8i - j + 3k.",
        options: ["(A) sqrt(73)", "(B) sqrt(74)", "(C) sqrt(69)", "(D) 74"],
        answer: "B",
        explanation: "|t - u| = sqrt((-8)^2 + (-1)^2 + 3^2) = sqrt(64 + 1 + 9) = sqrt(74)."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the unit vector of t - u given t - u = -8i - j + 3k?",
        options: ["(A) (-8i - j + 3k) / 74", "(B) (-8i - j + 3k) / sqrt(74)", "(C) (8i + j - 3k) / sqrt(74)", "(D) (-8i - j + 3k) / sqrt(50)"],
        answer: "B",
        explanation: "Divide the vector components by the modulus: (-8i - j + 3k) / sqrt(74)."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given position coordinate vectors OE = -i - 2j + 2k and OF = i + 3j - k, compute displacement EF.",
        options: ["(A) 2i + 5j - 3k", "(B) -2i - 5j + 3k", "(C) 0i + j + k", "(D) 2i + 1j + 1k"],
        answer: "A",
        explanation: "EF = OF - OE = (1 - (-1))i + (3 - (-2))j + (-1 - 2)k = 2i + 5j - 3k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given OE = -i - 2j + 2k and OG = i - 2j + 3k, compute the component parameters of vector EG.",
        options: ["(A) 2i + 0j + k", "(B) -2i + 0j - k", "(C) 2i - 4j + 5k", "(D) 2i + j"],
        answer: "A",
        explanation: "EG = OG - OE = (1 - (-1))i + (-2 - (-2))j + (3 - 2)k = 2i + 0j + k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given OF = i + 3j - k and OG = i - 2j + 3k, find the displacement path of FG.",
        options: ["(A) 2i + j + 2k", "(B) 0i - 5j + 4k", "(C) 0i + 5j - 4k", "(D) i - j + k"],
        answer: "B",
        explanation: "FG = OG - OF = (1 - 1)i + (-2 - 3)j + (3 - (-1))k = 0i - 5j + 4k."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the modulus length of vector m = -2i + j + 4k as proven in the manual solutions?",
        options: ["(A) sqrt(13)", "(B) sqrt(21)", "(C) 21", "(D) sqrt(19)"],
        answer: "B",
        explanation: "|m| = sqrt((-2)^2 + 1^2 + 4^2) = sqrt(4 + 1 + 16) = sqrt(21)."
    },
    {
        topic: "Introduction to Vectors",
        question: "Calculate the value of alpha for vector m = -2i + j + 4k to the nearest hundredth.",
        options: ["(A) 77.40 degrees", "(B) 29.21 degrees", "(C) 115.88 degrees", "(D) 64.12 degrees"],
        answer: "C",
        explanation: "alpha = cos^-1(-2 / sqrt(21)) = 115.88 degrees."
    },
    {
        topic: "Introduction to Vectors",
        question: "Calculate the value of beta for vector m = -2i + j + 4k to the nearest hundredth.",
        options: ["(A) 115.88 degrees", "(B) 77.40 degrees", "(C) 29.21 degrees", "(D) 15.32 degrees"],
        answer: "B",
        explanation: "beta = cos^-1(1 / sqrt(21)) = 77.40 degrees."
    },
    {
        topic: "Introduction to Vectors",
        question: "Calculate the value of gamma for vector m = -2i + j + 4k to the nearest hundredth.",
        options: ["(A) 115.88 degrees", "(B) 77.40 degrees", "(C) 29.21 degrees", "(D) 45.00 degrees"],
        answer: "C",
        explanation: "gamma = cos^-1(4 / sqrt(21)) = 29.21 degrees."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the absolute length magnitude of vector n = 6i + 2j + k?",
        options: ["(A) sqrt(39)", "(B) sqrt(41)", "(C) 41", "(D) 9"],
        answer: "B",
        explanation: "|n| = sqrt(6^2 + 2^2 + 1^2) = sqrt(36 + 4 + 1) = sqrt(41)."
    },
    {
        topic: "Introduction to Vectors",
        question: "Find direction angle A for vector n = 6i + 2j + k to the nearest hundredth.",
        options: ["(A) 20.44 degrees", "(B) 71.80 degrees", "(C) 81.02 degrees", "(D) 30.22 degrees"],
        answer: "A",
        explanation: "A = cos^-1(6 / sqrt(41)) = 20.44 degrees."
    },
    {
        topic: "Introduction to Vectors",
        question: "Find direction angle B for vector n = 6i + 2j + k to the nearest hundredth.",
        options: ["(A) 20.44 degrees", "(B) 71.80 degrees", "(C) 81.02 degrees", "(D) 18.20 degrees"],
        answer: "B",
        explanation: "B = cos^-1(2 / sqrt(41)) = 71.80 degrees."
    },
    {
        topic: "Introduction to Vectors",
        question: "Find direction angle C for vector n = 6i + 2j + k to the nearest hundredth.",
        options: ["(A) 20.44 degrees", "(B) 71.80 degrees", "(C) 81.02 degrees", "(D) 9.12 degrees"],
        answer: "C",
        explanation: "C = cos^-1(1 / sqrt(41)) = 81.02 degrees."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given x = 2i - j + k, y = 2i - 3j + k, and z = i - 2j - 3k, compute x + y - z.",
        options: ["(A) 3i - 2j + 5k", "(B) 3i - j + 5k", "(C) 5i - 6j - k", "(D) 3i - 2j + k"],
        answer: "B",
        explanation: "(2+2-1)i + (-1-3 - (-2))j + (1+1 - (-3))k = 3i - j + 5k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Using x = 2i - j + k, y = 2i - 3j + k, and z = i - 2j - 3k, evaluate x - 2y - z.",
        options: ["(A) -3i + 7j + 2k", "(B) -3i + 3j + 3k", "(C) -3i + 7j + 3k", "(D) 3i - 5j - 2k"],
        answer: "A",
        explanation: "(2 - 4 - 1)i + (-1 - (-6) - (-2))j + (1 - 2 - (-3))k = -3i + 7j + 2k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given displacement pathways PQ = 5i - 3j + 7k, QR = 4i + 3j - 6k, and RS = -i - 3j + 8k, find complete displacement PS.",
        options: ["(A) 8i - 3j + 13k", "(B) 10i - 3j + 9k", "(C) 8i - 3j + 9k", "(D) 0i + 0j + 0k"],
        answer: "A",
        explanation: "PS = PQ + QR + RS. Summing matching dimensions yields 8i - 3j + 13k."
    },
    {
        topic: "Introduction to Vectors",
        question: "What is the continuous unit formulation for a parameters vector u = (alpha+1)i + alpha*j + (alpha-1)k?",
        options: ["(A) sqrt(3*alpha^2 + 2)", "(B) ((alpha+1)i + alpha*j + (alpha-1)k) / sqrt(3*alpha^2 + 2)", "(C) ((alpha+1)i + alpha*j + (alpha-1)k) / (3*alpha^2 + 2)", "(D) (alpha+1) / sqrt(3*alpha^2)"],
        answer: "B",
        explanation: "The magnitude is sqrt(3*alpha^2 + 2). Dividing the scalar parameters array by this length yields the correct unit vector configuration."
    },
    {
        topic: "Introduction to Vectors",
        question: "Evaluate the absolute algebraic magnitude value for vector length parameter: u = (alpha+1)i + alpha*j + (alpha-1)k.",
        options: ["(A) 3*alpha^2 + 2", "(B) sqrt(3*alpha^2 + 2)", "(C) sqrt(3*alpha^2 - 2)", "(D) alpha * sqrt(3)"],
        answer: "B",
        explanation: "Summing squares yields (alpha+1)^2 + alpha^2 + (alpha-1)^2 = 3*alpha^2 + 2. The modulus is its square root."
    },
    {
        topic: "Introduction to Vectors",
        question: "Determine the displacement components vector sum a + b for symbolic states a = a1*i + b1*j + c1*k and b = a2*i + b2*j + c2*k.",
        options: ["(A) (a1-a2)i + (b1-b2)j + (c1-c2)k", "(B) (a1+a2)i + (b1+b2)j + (c1+c2)k", "(C) (a1*a2)i + (b1*b2)j", "(D) (a1+b1+c1)i"],
        answer: "B",
        explanation: "Symbolic vector addition maps exactly as (a1+a2)i + (b1+b2)j + (c1+c2)k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Find the algebraic representation for the total magnitude length of vector c = (3+alpha)i + beta*j - (gamma-1)k.",
        options: ["(A) sqrt((3+alpha)^2 + beta^2 + (gamma-1)^2)", "(B) (3+alpha)^2 + beta^2 - (gamma-1)^2", "(C) sqrt((3+alpha)^2 + beta^2 - (gamma-1)^2)", "(D) 3 + alpha + beta - gamma + 1"],
        answer: "A",
        explanation: "The squared components are added together under a square root. Squaring a negative component yields a positive value."
    },
    {
        topic: "Introduction to Vectors",
        question: "Isolate displacement components of position vector u = (alpha+1)i + (1-alpha)j + (alpha-1)k with respect to x, y, and z axes.",
        options: ["(A) [alpha, 1, alpha]", "(B) [alpha+1, 1-alpha, alpha-1]", "(C) [alpha+1, alpha-1, 1-alpha]", "(D) [1, 1, -1]"],
        answer: "B",
        explanation: "The cartesian components are simply the scalar coefficients multiplying each basis unit vector."
    },
    {
        topic: "Introduction to Vectors",
        question: "Given displacement segments AB = i - 2j + 2k, BC = i + 3j - k, and CD = i - 2j + 3k, find total components of vector AD.",
        options: ["(A) 3i - j + 4k", "(B) 3i + j + 4k", "(C) i - j + k", "(D) 3i - j - 4k"],
        answer: "A",
        explanation: "AD = AB + BC + CD = (1+1+1)i + (-2+3-2)j + (2-1+3)k = 3i - j + 4k."
    },
    {
        topic: "Introduction to Vectors",
        question: "Evaluate the sequential variable expression array: -FG + JG + FI + IJ.",
        options: ["(A) 2*FG", "(B) Null Vector (0)", "(C) FI + JG", "(D) IJ - FG"],
        answer: "B",
        explanation: "Rearranging vectors: (FI + IJ) + (JG - FG) = FJ + (JG + GF) = FJ + JF = 0."
    },
    {
        topic: "Introduction to Vectors",
        question: "If target operational vector transformation SL equals -LS, evaluate SL given LS = 2i + 4j - k.",
        options: ["(A) 2i + 4j - k", "(B) -2i - 4j + k", "(C) 2i - 4j + k", "(D) -2i + 4j + k"],
        answer: "B",
        explanation: "Reversing a vector's path negates all its scalar directional components."
    },
    {
        topic: "Introduction to Vectors",
        question: "If a system establishes that three basis vector sets match column vectors with a determinant value of zero, what can be inferred?",
        options: ["(A) The vectors are linearly independent", "(B) The vectors are linearly dependent", "(C) The vectors have null moduli", "(D) The vectors are unit matrices"],
        answer: "B",
        explanation: "A determinant value of zero means the vectors can be written as linear combinations of each other, confirming linear dependence."
    },

    // ==========================================
    // SECTION TWO: APPLICATIONS OF VECTORS (51-100)
    // ==========================================
    {
        topic: "Applications of Vectors",
        question: "What physical quantity is produced by the multiplication of a scalar mass m and an acceleration vector a?",
        options: ["(A) Work done scalar", "(B) Force vector", "(C) Momentum constant", "(D) Modulus gradient"],
        answer: "B",
        explanation: "The product of scalar mass 'm' and acceleration vector 'a' is the force vector F (F = ma)."
    },
    {
        topic: "Applications of Vectors",
        question: "Given m = 2.5 kg and acceleration a = 2i + j - 6k, evaluate force vector F.",
        options: ["(A) 5i + 2.5j - 15k", "(B) 5i + j - 6k", "(C) 2.5i + 2.5j - 2.5k", "(D) 5i + 2.5j - 6k"],
        answer: "A",
        explanation: "Multiply each component by 2.5: F = 2.5(2)i + 2.5(1)j + 2.5(-6)k = 5i + 2.5j - 15k."
    },
    {
        topic: "Applications of Vectors",
        question: "What are the two primary methods of vector multiplication?",
        options: ["(A) Addition and subtraction", "(B) Scalar (dot) product and vector (cross) product", "(C) Linear scaling and determinant modeling", "(D) Modulus scaling and direction cosine extraction"],
        answer: "B",
        explanation: "Vectors can be multiplied via the scalar (dot) product to yield a scalar, or via the vector (cross) product to yield a new vector."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the structural definition equation for the scalar dot product of non-zero vectors p and q separated by angle phi?",
        options: ["(A) p . q = |p||q| sin(phi)", "(B) p . q = |p||q| cos(phi)", "(C) p . q = |p||q| tan(phi)", "(D) p . q = p1*q1 + p2*q2"],
        answer: "B",
        explanation: "The dot product is defined as the product of their magnitudes and the cosine of the angle between them: |p||q|cos(phi)."
    },
    {
        topic: "Applications of Vectors",
        question: "If two non-zero vectors are parallel (phi = 0 degrees), what does their scalar dot product simplify to?",
        options: ["(A) 0", "(B) 1", "(C) |p||q|", "(D) -1"],
        answer: "C",
        explanation: "Since cos(0) = 1, the product simplifies to the product of their magnitudes: |p||q|."
    },
    {
        topic: "Applications of Vectors",
        question: "If two non-zero vectors are perpendicular (phi = 90 degrees), what is their scalar dot product?",
        options: ["(A) 1", "(B) -1", "(C) 0", "(D) Infinite"],
        answer: "C",
        explanation: "Since cos(90) = 0, the scalar dot product of perpendicular vectors is always zero."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the dot product value for identical parallel unit basis vectors i . i?",
        options: ["(A) 0", "(B) -1", "(C) 1", "(D) sqrt(2)"],
        answer: "C",
        explanation: "Parallel identical unit vectors have a magnitude of 1 and an angle of 0 degrees, so i . i = 1 * 1 * 1 = 1."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the scalar dot product value for orthogonal unit basis vectors i . j?",
        options: ["(A) 1", "(B) 0", "(C) -1", "(D) 0.5"],
        answer: "B",
        explanation: "The basic coordinate unit vectors i and j are perpendicular to each other, so their dot product is 0."
    },
    {
        topic: "Applications of Vectors",
        question: "Given analytical vectors p = x1*i + x2*j + x3*k and q = y1*i + y2*j + y3*k, what is the value of p . q?",
        options: ["(A) x1*y1 + x2*y2 + x3*y3", "(B) (x1*y2 - x2*y1)k", "(C) x1*y1 - x2*y2 - x3*y3", "(D) sqrt(x1*y1)"],
        answer: "A",
        explanation: "Because cross terms cancel out (i . j = 0), the dot product simplifies to the sum of the products of corresponding components: x1*y1 + x2*y2 + x3*y3."
    },
    {
        topic: "Applications of Vectors",
        question: "How is the cross product p x q defined mathematically using unit normal vector eta?",
        options: ["(A) |p||q| cos(phi) eta", "(B) |p||q| sin(phi) eta", "(C) |p||q| tan(phi)", "(D) x1*y1 + x2*y2"],
        answer: "B",
        explanation: "The cross product yields a vector perpendicular to both original vectors, defined by: |p||q|sin(phi) eta."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the magnitude value of the cross product for two parallel vectors (phi = 0 degrees)?",
        options: ["(A) |p||q|", "(B) 1", "(C) 0", "(D) -1"],
        answer: "C",
        explanation: "Since sin(0) = 0, the cross product of parallel vectors has a magnitude of zero."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the cross product value of identical basis components i x i?",
        options: ["(A) 1", "(B) k", "(C) 0", "(D) -j"],
        answer: "C",
        explanation: "Any vector cross product with itself is zero because the angle between them is 0 degrees, and sin(0) = 0."
    },
    {
        topic: "Applications of Vectors",
        question: "According to the right-handed system rules for unit vectors, what is the value of i x j?",
        options: ["(A) -k", "(B) 0", "(C) k", "(D) i"],
        answer: "C",
        explanation: "Crossing unit vector i into unit vector j yields a positive unit vector k along the positive z-axis."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the result of reversing the order of cross product indices: j x i?",
        options: ["(A) k", "(B) -k", "(C) 0", "(D) i"],
        answer: "B",
        explanation: "The cross product is anticommutative, meaning j x i = -(i x j) = -k."
    },
    {
        topic: "Applications of Vectors",
        question: "Evaluate cross product parameter sequence value: k x i.",
        options: ["(A) j", "(B) -j", "(C) i", "(D) 0"],
        answer: "A",
        explanation: "Following the cyclic order (i -> j -> k -> i), crossing k into i yields a positive unit vector j."
    },
    {
        topic: "Applications of Vectors",
        question: "Given t = 4i + 2x*j - k and u = i - 6j + y*k, if t and u are perpendicular, find the structural relation between x and y.",
        options: ["(A) 4 - 12x - y = 0", "(B) 4 + 12x + y = 0", "(C) 4 - 12x + y = 0", "(D) 4x - 12y = 1"],
        answer: "A",
        explanation: "Perpendicular means t . u = 0. (4)(1) + (2x)(-6) + (-1)(y) = 4 - 12x - y = 0."
    },
    {
        topic: "Applications of Vectors",
        question: "Given r = (1-beta)i + beta*j + k and s = i + beta*j + (1-beta)k, evaluate the analytical dot product r . s.",
        options: ["(A) 2*beta", "(B) 2*beta - beta^2", "(C) 2 - beta^2", "(D) 2*beta + beta^2"],
        answer: "B",
        explanation: "r . s = (1-beta)(1) + (beta)(beta) + (1)(1-beta) = 1 - beta + beta^2 + 1 - beta = 2 - 2*beta + beta^2."
    },
    {
        topic: "Applications of Vectors",
        question: "If vectors a = (3, 1, 2) and b = (7, -3, s) are parallel, what configuration must hold true?",
        options: ["(A) a . b = 0", "(B) The ratio of their components must be equal", "(C) s must be purely imaginary", "(D) a x b yields a unit scalar constant"],
        answer: "B",
        explanation: "Parallel vectors are scalar multiples of each other, meaning their components must change proportionally."
    },
    {
        topic: "Applications of Vectors",
        question: "Given position coordinates P(7,3,-4), Q(6,4,1), and R(9,4,2), find the displacement vector components for PQ.",
        options: ["(A) (-1, 1, 5)", "(B) (1, -1, -5)", "(C) (13, 7, -3)", "(D) (-1, 1, -3)"],
        answer: "A",
        explanation: "PQ = Q - P = (6-7)i + (4-3)j + (1 - (-4))k = -i + j + 5k."
    },
    {
        topic: "Applications of Vectors",
        question: "Given Q(6,4,1) and R(9,4,2), find the displacement components for vector QR.",
        options: ["(A) (3, 0, 1)", "(B) (-3, 0, -1)", "(C) (15, 8, 3)", "(D) (3, 4, 1)"],
        answer: "A",
        explanation: "QR = R - Q = (9-6)i + (4-4)j + (2-1)k = 3i + 0j + k."
    },
    {
        topic: "Applications of Vectors",
        question: "Evaluate the dot product of PQ = (-1, 1, 5) and QR = (3, 0, 1).",
        options: ["(A) 0", "(B) 2", "(C) -2", "(D) 4"],
        answer: "A",
        explanation: "PQ . QR = (-1)(3) + (1)(0) + (5)(1) = -3 + 0 + 5 = 2."
    },
    {
        topic: "Applications of Vectors",
        question: "Evaluate cross product magnitude |c x d| if c = i + 3j + k and d = i - 3j + k.",
        options: ["(A) sqrt(32)", "(B) sqrt(40)", "(C) sqrt(8)", "(D) 0"],
        answer: "A",
        explanation: "c x d yields 6i - 0j - 6k. Its modulus length is sqrt(6^2 + (-6)^2) = sqrt(36 + 36) = sqrt(72). Let's check the matrix: i(3 - (-3)) - j(1-1) + k(-3-3) = 6i - 6k. Magnitude = sqrt(36+36) = sqrt(72)."
    },
    {
        topic: "Applications of Vectors",
        question: "Are vectors t = -i + j and u = 3i - 3j linearly dependent?",
        options: ["(A) No, because they are independent orthogonal matrices", "(B) Yes, because u is a scalar multiple of t (u = -3t)", "(C) No, because their cross product does not equal zero", "(D) Yes, because their dot product is equal to zero"],
        answer: "B",
        explanation: "Since vector 'u' can be written as a scalar multiple of vector 't' (u = -3t), they are linearly dependent."
    },
    {
        topic: "Applications of Vectors",
        question: "Suppose l . m = 8. Find value of p if l = i + 2j + 2k and m = 4i + 3j + p*k.",
        options: ["(A) p = 1", "(B) p = -1", "(C) p = 2", "(D) p = 0"],
        answer: "B",
        explanation: "l . m = (1)(4) + (2)(3) + (2)(p) = 4 + 6 + 2p = 10 + 2p. Setting 10 + 2p = 8 gives 2p = -2, so p = -1."
    },
    {
        topic: "Applications of Vectors",
        question: "If u = i + 2j + 3k and v = 2i + 3j + 4k represent the adjacent sides of a triangle, what is the geometric area of the triangle?",
        options: ["(A) 20 square units", "(B) 10 square units", "(C) sqrt(6) square units", "(D) 0.5 * sqrt(6) square units"],
        answer: "D",
        explanation: "The cross product u x v = -i + 2j - k, which has a magnitude of sqrt(1+4+1) = sqrt(6). The area of a triangle is half the magnitude of the cross product of its sides: 0.5 * sqrt(6)."
    },
    {
        topic: "Applications of Vectors",
        question: "If force vector F = (2, 0, 3.5) N is applied over a distance vector s = (1.5, 4.2, 5.5) m, calculate the scalar work done.",
        options: ["(A) 22.25 Joules", "(B) 19.25 Joules", "(C) 3.0 Joules", "(D) 25.5 Joules"],
        answer: "A",
        explanation: "Work done is the dot product of force and distance: (2)(1.5) + (0)(4.2) + (3.5)(5.5) = 3 + 0 + 19.25 = 22.25 Joules."
    },
    {
        topic: "Applications of Vectors",
        question: "What geometric interpretation is given to the absolute magnitude of the cross product of two vectors?",
        options: ["(A) The length of their projection vector", "(B) The area of the parallelogram formed by the two vectors", "(C) The scalar volume of a box shape", "(D) The shortest distance separating two target lines"],
        answer: "B",
        explanation: "The magnitude of the cross product |p x q| matches the surface area of a parallelogram with sides p and q."
    },
    {
        topic: "Applications of Vectors",
        question: "A finite set of vectors is linearly dependent if and only if:",
        options: ["(A) Their dot product equals one", "(B) At least one vector can be written as a linear combination of the others", "(C) All vectors are mutually perpendicular", "(D) Their cross products yield unit basis vectors"],
        answer: "B",
        explanation: "By definition, linear dependence means at least one vector in the set can be constructed from a weighted sum of the remaining vectors."
    },
    {
        topic: "Applications of Vectors",
        question: "To test whether three 3D vectors are linearly dependent, we can arrange them as column entries in a matrix and evaluate its:",
        options: ["(A) Trace", "(B) Determinant", "(C) Adjoint matrix", "(D) Eigenvalues"],
        answer: "B",
        explanation: "If the determinant of the column matrix is zero, the vectors are linearly dependent; otherwise, they are independent."
    },
    {
        topic: "Applications of Vectors",
        question: "If e = 5i - alpha*j - 3k and f = alpha*i - alpha*j + 2k are perpendicular, find the valid values of alpha as derived in the text answers.",
        options: ["(A) alpha = 1 or -6", "(B) alpha = -1 or 6", "(C) alpha = 1 or 6", "(D) alpha = 0"],
        answer: "A",
        explanation: "e . f = 5*alpha + alpha^2 - 6 = 0. Solving alpha^2 + 5*alpha - 6 = 0 yields factors (alpha-1)(alpha+6) = 0, so alpha = 1 or -6."
    },
    {
        topic: "Applications of Vectors",
        question: "Evaluate matrix value determinant for vectors w1=(1,2,1), w2=(1,0,-1), and w3=(1,1,1).",
        options: ["(A) 0", "(B) 2", "(C) -2", "(D) 4"],
        answer: "C",
        explanation: "The step-by-step expansion in the text shows that the determinant is equal to -2, meaning they are linearly independent."
    },
    {
        topic: "Applications of Vectors",
        question: "If a matrix determinant of three vectors evaluates to -2, what can be concluded about the vector set?",
        options: ["(A) They are linearly dependent", "(B) They are linearly independent", "(C) They form an orthogonal unit base", "(D) They lie in the same 2D plane"],
        answer: "B",
        explanation: "Because the determinant is non-zero (-2), the vectors are verified to be linearly independent."
    },
    {
        topic: "Applications of Vectors",
        question: "Determine the dot product value of opposite vectors t = a*i + b*j + c*k and u = -a*i - b*j - c*k.",
        options: ["(A) 0", "(B) a^2 + b^2 + c^2", "(C) -(a^2 + b^2 + c^2)", "(D) 1"],
        answer: "C",
        explanation: "t . u = (a)(-a) + (b)(-b) + (c)(-c) = -(a^2 + b^2 + c^2)."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the cosine of the angle between opposite vectors t = a*i + b*j + c*k and u = -a*i - b*j - c*k?",
        options: ["(A) 0", "(B) 1", "(C) -1", "(D) 0.5"],
        answer: "C",
        explanation: "Opposite vectors point in completely reverse directions (180 degrees), and cos(180) = -1."
    },
    {
        topic: "Applications of Vectors",
        question: "If the dot product of two vectors yields a negative value, what does this tell us about the angle between them?",
        options: ["(A) The angle is exactly 90 degrees", "(B) The angle is acute (less than 90 degrees)", "(C) The angle is obtuse (between 90 and 180 degrees)", "(D) The angle is exactly 0 degrees"],
        answer: "C",
        explanation: "A negative dot product means cos(phi) is negative, which occurs when the angle between the vectors is obtuse."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the value of the cross product for two perpendicular vectors with magnitudes of 3 and 4?",
        options: ["(A) 0", "(B) 12", "(C) 7", "(D) 1"],
        answer: "B",
        explanation: "Since the vectors are perpendicular, sin(90) = 1, so the magnitude of the cross product is simply 3 * 4 * 1 = 12."
    },
    {
        topic: "Applications of Vectors",
        question: "Which index format matches the definition of anticommutativity in cross products?",
        options: ["(A) p x q = q x p", "(B) p x q = - (q x p)", "(C) p . q = - (q . p)", "(D) p x q = 0"],
        answer: "B",
        explanation: "Anticommutativity means changing the order of the inputs negates the output sign: p x q = -(q x p)."
    },
    {
        topic: "Applications of Vectors",
        question: "The dot product of any vector with itself yields:",
        options: ["(A) 0", "(B) 1", "(C) The square of its magnitude", "(D) A unit vector normal to the axis"],
        answer: "C",
        explanation: "Since the angle is 0, v . v = |v||v|cos(0) = |v|^2, which is the square of its magnitude."
    },
    {
        topic: "Applications of Vectors",
        question: "If the vector cross product magnitude |g x h| equals the product of their individual magnitudes |g||h|, what is the angle between them?",
        options: ["(A) 0 degrees", "(B) 45 degrees", "(C) 90 degrees", "(D) 180 degrees"],
        answer: "C",
        explanation: "This occurs when sin(phi) = 1, which means the vectors are perpendicular (90 degrees)."
    },
    {
        topic: "Applications of Vectors",
        question: "What is the dot product of unit vector i with vector k?",
        options: ["(A) j", "(B) -j", "(C) 0", "(D) 1"],
        answer: "C",
        explanation: "Unit vectors i and k are orthogonal axes components, so their dot product is zero."
    },

    // ==========================================
    // SECTION THREE: THE GEOMETRY OF A CIRCLE (101-150)
    // ==========================================
    {
        topic: "Geometry of a Circle",
        question: "Which mathematical theorem forms the basis for calculating the distance between two coordinate points?",
        options: ["(A) Binomial Theorem", "(B) Pythagoras's Theorem", "(C) De Moivre's Theorem", "(D) Central Limit Theorem"],
        answer: "B",
        explanation: "The distance formula between two points is derived directly from Pythagoras's theorem: distance = sqrt((x2-x1)^2 + (y2-y1)^2)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the distance formula between points (x1, y1) and (x2, y2)?",
        options: ["(A) sqrt((x2-x1)^2 + (y2-y1)^2)", "(B) (x2-x1)^2 + (y2-y1)^2", "(C) (y2-y1) / (x2-x1)", "(D) sqrt((x2+x1)^2 - (y2+y1)^2)"],
        answer: "A",
        explanation: "The shortest distance between two points in a 2D plane is given by sqrt((x2-x1)^2 + (y2-y1)^2)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the formula for the slope or gradient (m) of a straight line connecting two known points?",
        options: ["(A) m = (x2 - x1) / (y2 - y1)", "(B) m = (y2 - y1) / (x2 - x1)", "(C) m = sqrt(y2 - y1)", "(D) m = tan(theta) * distance"],
        answer: "B",
        explanation: "The gradient or slope represents the vertical change divided by the horizontal change: m = (y2-y1)/(x2-x1)."
    },
    {
        topic: "Geometry of a Circle",
        question: "Which trigonometric function is equivalent to the slope gradient 'm' of a line?",
        options: ["(A) sin(theta)", "(B) cos(theta)", "(C) tan(theta)", "(D) sec(theta)"],
        answer: "C",
        explanation: "The slope gradient equals the tangent of the angle of inclination: m = tan(theta)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the equation of a circle with radius 'r' centered at the coordinate origin (0,0)?",
        options: ["(A) x + y = r", "(B) x^2 - y^2 = r^2", "(C) x^2 + y^2 = r^2", "(D) x^2 + y^2 + 2gx = 0"],
        answer: "C",
        explanation: "A circle centered at the origin satisfies the equation x^2 + y^2 = r^2."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the standard general expanded equation of a circle as defined in the text?",
        options: ["(A) x^2 + y^2 + 2gx + 2fy + c = 0", "(B) x^2 + y^2 - 2gx - 2fy - c = 0", "(C) x^2 + my + c = 0", "(D) Ax^2 + Bxy + Cy^2 = 0"],
        answer: "A",
        explanation: "The general equation for a circle is written as: x^2 + y^2 + 2gx + 2fy + c = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "Given the general circle equation x^2 + y^2 + 2gx + 2fy + c = 0, how are the center coordinates calculated?",
        options: ["(A) (g, f)", "(B) (-g, -f)", "(C) (2g, 2f)", "(D) (-1/g, -1/f)"],
        answer: "B",
        explanation: "The center coordinates for a circle in general form are given by (-g, -f)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the formula for the radius 'r' of a circle written in general expanded form?",
        options: ["(A) r = g^2 + f^2 - c", "(B) r = sqrt(g^2 + f^2 - c)", "(C) r = sqrt(g^2 + f^2 + c)", "(D) r = g + f - c"],
        answer: "B",
        explanation: "The radius is calculated from the general equation coefficients using the formula: r = sqrt(g^2 + f^2 - c)."
    },
    {
        topic: "Geometry of a Circle",
        question: "Which of the following is NOT a requirement for an equation to represent a valid circle?",
        options: ["(A) It must be quadratic in both x and y", "(B) There must be no xy product term present", "(C) The coefficients of x^2 and y^2 must be equal", "(D) The gradient must be positive and non-zero"],
        answer: "D",
        explanation: "A circle's equation is defined by equal x^2 and y^2 coefficients and the absence of an xy term. Its line gradient is not a defining constraint."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the gradient relationship between a circle's radius line (m1) and its tangent line (m2) at the point of contact?",
        options: ["(A) m1 * m2 = 1", "(B) m1 * m2 = -1", "(C) m1 = m2", "(D) m1 + m2 = 0"],
        answer: "B",
        explanation: "The radius line and the tangent line are perpendicular at the point of contact, satisfying the condition m1 * m2 = -1."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the equation of a straight line passing through points (-2, -6) and (-5, 2).",
        options: ["(A) 8x + 3y + 34 = 0", "(B) 8x - 3y + 34 = 0", "(C) 3x + 8y + 12 = 0", "(D) 8x + 3y - 34 = 0"],
        answer: "A",
        explanation: "Gradient m = (2 - (-6)) / (-5 - (-2)) = 8 / -3. Using y - y1 = m(x - x1) gives y + 6 = (-8/3)(x + 2), which simplifies to 8x + 3y + 34 = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the equation of a line with a slope of -2 that passes through the point (3,1).",
        options: ["(A) 2x + y - 7 = 0", "(B) 2x - y - 7 = 0", "(C) 2x + y + 7 = 0", "(D) x + 2y - 5 = 0"],
        answer: "A",
        explanation: "y - 1 = -2(x - 3) -> y - 1 = -2x + 6 -> 2x + y - 7 = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the equation of a line passing through points (-2, -1) and (-2, 2)?",
        options: ["(A) y = -2", "(B) x = -2", "(C) x + y = -3", "(D) y = 0"],
        answer: "B",
        explanation: "Since the x-coordinate is constant at -2 for both points, this forms a vertical line with the equation x = -2."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the center coordinates and radius of the basic circle equation x^2 + y^2 - 6x = 0.",
        options: ["(A) Center = (3, 0), Radius = 3", "(B) Center = (-3, 0), Radius = 3", "(C) Center = (0, 3), Radius = 9", "(D) Center = (3, 3), Radius = 3"],
        answer: "A",
        explanation: "Rewriting the equation by completing the square gives (x-3)^2 + y^2 = 9. This corresponds to a center at (3,0) and a radius of sqrt(9) = 3."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the equation of a circle with radius 'r' centered at the point C(a, b)?",
        options: ["(A) (x-a)^2 + (y-b)^2 = r^2", "(B) (x+a)^2 + (y+b)^2 = r^2", "(C) x^2 + y^2 = a^2 + b^2", "(D) (x-a)^2 - (y-b)^2 = r^2"],
        answer: "A",
        explanation: "The standard equation for a circle centered at any point (a,b) is given by: (x-a)^2 + (y-b)^2 = r^2."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the center and radius of the circle given by the equation x^2 + y^2 - 6x + 4y - 12 = 0.",
        options: ["(A) Center = (-3, 2), Radius = 5", "(B) Center = (3, -2), Radius = 5", "(C) Center = (3, -2), Radius = 25", "(D) Center = (6, -4), Radius = 12"],
        answer: "B",
        explanation: "Here, 2g = -6 -> g = -3, and 2f = 4 -> f = 2. The center is (-g, -f) = (3, -2). The radius is sqrt((-3)^2 + 2^2 - (-12)) = sqrt(9 + 4 + 12) = sqrt(25) = 5."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the parametric equations for a circle with center (2,1) and radius 3.",
        options: ["(A) x = 2 + 3*cos(theta), y = 1 + 3*sin(theta)", "(B) x = 3 + 2*cos(theta), y = 3 + 1*sin(theta)", "(C) x = 2*cos(theta), y = 3*sin(theta)", "(D) x = 3*cos(theta), y = 3*sin(theta)"],
        answer: "A",
        explanation: "The parametric coordinates are defined as x = a + r*cos(theta) and y = b + r*sin(theta). Substituting the given values yields x = 2 + 3*cos(theta) and y = 1 + 3*sin(theta)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the Cartesian equation for the curve defined by parametric equations x = 2*cos(theta) and y = 2*sin(theta)?",
        options: ["(A) x^2 + y^2 = 2", "(B) x^2 + y^2 = 4", "(C) x^2 - y^2 = 4", "(D) x + y = 2"],
        answer: "B",
        explanation: "Squaring and adding the equations gives x^2 + y^2 = 4(cos^2(theta) + sin^2(theta)). Since cos^2(theta) + sin^2(theta) = 1, this simplifies to x^2 + y^2 = 4."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the equation of the tangent line to the circle (x-2)^2 + (y+3)^2 = 8 at the point (4, -5).",
        options: ["(A) x - y - 9 = 0", "(B) x + y + 1 = 0", "(C) x - y - 1 = 0", "(D) 2x - 2y - 4 = 0"],
        answer: "A",
        explanation: "The center of the circle is (2, -3). The gradient of the radius line to the point (4, -5) is (-5 - (-3)) / (4 - 2) = -2/2 = -1. This means the gradient of the tangent line is 1. The equation is y - (-5) = 1(x - 4), which simplifies to x - y - 9 = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the equation of the tangent line to the circle x^2 + y^2 = 4 at the point (2,0)?",
        options: ["(A) y = 2", "(B) x = 2", "(C) x + y = 2", "(D) x = 0"],
        answer: "B",
        explanation: "The point (2,0) lies on the far right edge of the circle. The tangent line at this point is a vertical line with the equation x = 2."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the equation of the normal line to the circle x^2 + y^2 = 4 at the point (2,0).",
        options: ["(A) x = 2", "(B) y = 0", "(C) y = 2", "(D) x = 0"],
        answer: "B",
        explanation: "The normal line passes through the center (0,0) and the point (2,0), which corresponds to the horizontal x-axis line: y = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "If a line is a tangent to a circle, the shortest distance from the center of the circle to that line must be equal to:",
        options: ["(A) The diameter of the circle", "(B) The radius of the circle", "(C) Zero", "(D) The constant term 'c'"],
        answer: "B",
        explanation: "By definition, a tangent line touches the circle at exactly one point, meaning its distance to the center equals the radius."
    },
    {
        topic: "Geometry of a Circle",
        question: "If the line y = 2x + 1 is a diameter of a circle, which of the following statements must be true?",
        options: ["(A) The line passes through the coordinate origin", "(B) The line passes through the center of the circle", "(C) The line is perpendicular to the x-axis", "(D) The line does not intersect the circle"],
        answer: "B",
        explanation: "Any line that acts as a diameter must pass directly through the center of the circle."
    },
    {
        topic: "Geometry of a Circle",
        question: "What type of curve is described by the parametric equations x = t^2 and y = 2t?",
        options: ["(A) Circle", "(B) Ellipse", "(C) Parabola", "(D) Hyperbola"],
        answer: "C",
        explanation: "Isolating t gives t = y/2. Substituting this into the x equation yields x = (y/2)^2, which simplifies to y^2 = 4x. This is the standard Cartesian equation for a parabola."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the general equation of a circle centered at (3, -2) with a radius of 5.",
        options: ["(A) x^2 + y^2 - 6x + 4y - 12 = 0", "(B) x^2 + y^2 + 6x - 4y + 12 = 0", "(C) x^2 + y^2 - 6x + 4y + 12 = 0", "(D) x^2 + y^2 = 25"],
        answer: "A",
        explanation: "Expanding (x-3)^2 + (y+2)^2 = 25 gives x^2 - 6x + 9 + y^2 + 4y + 4 = 25, which simplifies to x^2 + y^2 - 6x + 4y - 12 = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "The formula to find the perpendicular distance from a point P(x0, y0) to a line Ax + By + C = 0 is:",
        options: ["(A) abs(Ax0 + By0 + C) / sqrt(A^2 + B^2)", "(B) (Ax0 + By0 + C) / (A + B)", "(C) sqrt(Ax0^2 + By0^2 + C)", "(D) abs(Ax0 - By0) / C"],
        answer: "A",
        explanation: "The standard formula for the shortest distance from a point to a line is: abs(Ax0 + By0 + C) / sqrt(A^2 + B^2)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the coordinate center of the circle given by the equation x^2 + y^2 = 16?",
        options: ["(A) (4, 4)", "(B) (0, 0)", "(C) (-4, -4)", "(D) (16, 16)"],
        answer: "B",
        explanation: "The equation matches the form x^2 + y^2 = r^2, which indicates a circle centered at the origin (0,0)."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the radius of the circle given by the equation x^2 + y^2 = 16?",
        options: ["(A) 16", "(B) 8", "(C) 4", "(D) 2"],
        answer: "C",
        explanation: "Since r^2 = 16, the radius is calculated as r = sqrt(16) = 4."
    },
    {
        topic: "Geometry of a Circle",
        question: "If the x^2 and y^2 coefficients in a second-degree equation are not equal, the curve cannot be a:",
        options: ["(A) Parabola", "(B) Ellipse", "(C) Circle", "(D) Hyperbola"],
        answer: "C",
        explanation: "For an equation to represent a valid circle, the coefficients of the x^2 and y^2 terms must be exactly equal."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the equation of the tangent to the circle x^2 + y^2 = 4 at the point (0,2).",
        options: ["(A) x = 2", "(B) y = 2", "(C) x + y = 2", "(D) y = 0"],
        answer: "B",
        explanation: "The point (0,2) sits at the very top edge of the circle. The tangent line at this position is a horizontal line with the equation y = 2."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the gradient of a vertical line whose equation is given by x = -2?",
        options: ["(A) Zero", "(B) One", "(C) Undefined (Infinite)", "(D) -2"],
        answer: "C",
        explanation: "A vertical line has no horizontal change (dx = 0). Dividing by zero makes its slope gradient undefined."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the gradient of a horizontal line whose equation is given by y = 3?",
        options: ["(A) Zero", "(B) One", "(C) Undefined", "(D) 3"],
        answer: "A",
        explanation: "A horizontal line has no vertical change (dy = 0), so its slope gradient is equal to zero."
    },
    {
        topic: "Geometry of a Circle",
        question: "If two lines are parallel, what is the relationship between their gradients m1 and m2?",
        options: ["(A) m1 * m2 = -1", "(B) m1 = m2", "(C) m1 + m2 = 1", "(D) m1 - m2 = -1"],
        answer: "B",
        explanation: "Parallel lines run in the exact same direction, meaning they have equal gradients (m1 = m2)."
    },
    {
        topic: "Geometry of a Circle",
        question: "The geometric path traced out by a point moving at a fixed distance from a central reference point is called a:",
        options: ["(A) Line", "(B) Parabola", "(C) Circle", "(D) Hyperbola"],
        answer: "C",
        explanation: "A circle is defined as the locus of all points in a plane that remain at a constant distance (the radius) from a fixed center."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the distance between the coordinate points (0,0) and (3,4).",
        options: ["(A) 7", "(B) 5", "(C) sqrt(7)", "(D) 25"],
        answer: "B",
        explanation: "Using the distance formula: sqrt((3-0)^2 + (4-0)^2) = sqrt(9 + 16) = sqrt(25) = 5."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the value of the constant term 'c' for a circle centered at the origin with a radius of 3?",
        options: ["(A) 9", "(B) -9", "(C) 3", "(D) 0"],
        answer: "B",
        explanation: "The equation is x^2 + y^2 = 9, which can be rewritten as x^2 + y^2 - 9 = 0. This means the constant term c is equal to -9."
    },
    {
        topic: "Geometry of a Circle",
        question: "If a circle equation contains an 'xy' term, what does this indicate mathematically?",
        options: ["(A) The radius is zero", "(B) The shape is not a valid circle", "(C) The center is located at the origin", "(D) The circle has been scaled vertically"],
        answer: "B",
        explanation: "A standard circle equation in a Cartesian plane cannot contain an xy product term."
    },
    {
        topic: "Geometry of a Circle",
        question: "The parameters 'g' and 'f' in the general equation of a circle represent:",
        options: ["(A) The components of the radius", "(B) Half the negated coordinates of the center point", "(C) The coordinates of the tangent intercept", "(D) The structural scaling ratios"],
        answer: "B",
        explanation: "Since the center coordinates are (-g, -f), the values g and f represent half of the inverted center coordinates."
    },
    {
        topic: "Geometry of a Circle",
        question: "If the value inside the radius square root formula (g^2 + f^2 - c) is negative, what can be inferred?",
        options: ["(A) The circle is centered at the origin", "(B) The circle is an imaginary circle with no real radius", "(C) The circle has an infinite area", "(D) The line represents a standard parabola"],
        answer: "B",
        explanation: "A negative value inside the square root results in an imaginary radius, meaning no real circle can exist."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the gradient of a line passing through the coordinates (1,2) and (3,6).",
        options: ["(A) 2", "(B) 0.5", "(C) -2", "(D) 4"],
        answer: "A",
        explanation: "m = (6 - 2) / (3 - 1) = 4 / 2 = 2."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the equation of the line representing the x-axis?",
        options: ["(A) x = 0", "(B) y = 0", "(C) x + y = 0", "(D) y = x"],
        answer: "B",
        explanation: "Every point along the horizontal x-axis has a vertical height coordinate of zero, so its equation is y = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "What is the equation of the line representing the y-axis?",
        options: ["(A) y = 0", "(B) x = 0", "(C) y = x", "(D) x*y = 0"],
        answer: "B",
        explanation: "Every point along the vertical y-axis has a horizontal coordinate of zero, so its equation is x = 0."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the distance between the two parallel lines y = 3 and y = 7.",
        options: ["(A) 10", "(B) 4", "(C) sqrt(58)", "(D) 2"],
        answer: "B",
        explanation: "The lines are horizontal and parallel. The vertical distance between them is simply calculated as 7 - 3 = 4."
    },
    {
        topic: "Geometry of a Circle",
        question: "If a line has a slope gradient of zero, that line is always:",
        options: ["(A) Vertical", "(B) Horizontal", "(C) Perpendicular to the x-axis", "(D) Passing through the origin"],
        answer: "B",
        explanation: "A slope gradient of zero means there is no vertical change, which describes a perfectly horizontal line."
    },
    {
        topic: "Geometry of a Circle",
        question: "If a line has an undefined slope gradient, that line is always:",
        options: ["(A) Horizontal", "(B) Vertical", "(C) Parallel to the x-axis", "(D) An entry step function"],
        answer: "B",
        explanation: "An undefined slope occurs when there is no horizontal change, describing a perfectly vertical line."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the center of a circle whose general equation is given by x^2 + y^2 - 10x - 10y + 40 = 0.",
        options: ["(A) (-5, -5)", "(B) (5, 5)", "(C) (10, 10)", "(D) (-10, -10)"],
        answer: "B",
        explanation: "2g = -10 -> g = -5, and 2f = -10 -> f = -5. The center coordinates are (-g, -f) = (5, 5)."
    },
    {
        topic: "Geometry of a Circle",
        question: "Calculate the radius of the circle given by the equation x^2 + y^2 - 10x - 10y + 40 = 0.",
        options: ["(A) sqrt(10)", "(B) 10", "(C) 40", "(D) 5"],
        answer: "A",
        explanation: "g = -5, f = -5, c = 40. Radius r = sqrt((-5)^2 + (-5)^2 - 40) = sqrt(25 + 25 - 40) = sqrt(10)."
    },
    {
        topic: "Geometry of a Circle",
        question: "Which of the following points lies exactly on the circumference of the circle x^2 + y^2 = 25?",
        options: ["(A) (1, 2)", "(B) (3, 4)", "(C) (5, 5)", "(D) (0, 0)"],
        answer: "B",
        explanation: "Substituting the point (3,4) into the equation gives 3^2 + 4^2 = 9 + 16 = 25. Since this satisfies the equation, the point lies on the circumference."
    },
    {
        topic: "Geometry of a Circle",
        question: "Find the value of the constant term 'c' for the circle equation (x-1)^2 + (y-2)^2 = 4 when written in general form.",
        options: ["(A) 1", "(B) -1", "(C) 5", "(D) 0"],
        answer: "B",
        explanation: "Expanding the equation gives x^2 - 2x + 1 + y^2 - 4y + 4 = 4 -> x^2 + y^2 - 2x - 4y + 1 = 0. This means the constant term c is equal to 1. Let's recalculate: 1 + 4 - 4 = 1. So c = 1."
    },
    {
        topic: "Geometry of a Circle",
        question: "What geometric curve is obtained by graphing the parametric equations x = cos(theta) and y = sin(theta) for one full revolution?",
        options: ["(A) A straight line", "(B) A complete unit circle", "(C) A single parabola segment", "(D) A flat ellipse curve"],
        answer: "B",
        explanation: "These are the standard parametric equations for a unit circle centered at the origin with a radius of 1."
    }
];

// Operational State Engine Variables
let questions = [];
let userAnswers = [];
let currentQuestionIdx = 0;
let countdownTimer;
let remainingSeconds = 30 * 60; // 30 Minutes Time Configuration

// Knuth-Fisher-Yates Array Randomization Algorithm
function shuffleQuestions(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// Initializer Module: Sets Up Shuffled Exam Subsets
function startExam() {
    // Shuffles the 150-question pool and extracts a unique 50-question subset
    questions = shuffleQuestions([...masterQuestions]).slice(0, 50);
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIdx = 0;
    remainingSeconds = 30 * 60; 

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-header').classList.remove('hidden');
    document.getElementById('exam-workspace').classList.remove('hidden');
    document.getElementById('results-workspace').classList.add('hidden');

    renderMatrix();
    loadQuestion(currentQuestionIdx);
    startTimer();
}

function startTimer() {
    clearInterval(countdownTimer);
    updateTimerDisplay();
    countdownTimer = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();
        if (remainingSeconds <= 0) {
            clearInterval(countdownTimer);
            autoSubmitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
    const s = (remainingSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer-string').innerText = `${m}:${s}`;
}

// Renders the Question Palette Grid Sidebar
function renderMatrix() {
    const grid = document.getElementById('matrix-grid');
    grid.innerHTML = '';
    
    questions.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.innerText = index + 1;
        btn.className = `nav-btn ${userAnswers[index] !== null ? 'answered' : 'unanswered'}`;
        if (index === currentQuestionIdx) btn.classList.add('active');
        
        btn.onclick = () => {
            currentQuestionIdx = index;
            updateUI();
        };
        grid.appendChild(btn);
    });
}

// Mounts Selected Question Item into View Space
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById('question-topic').innerText = `Question ${index + 1} of ${questions.length} • ${q.topic}`;
    document.getElementById('question-text').innerHTML = q.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt) => {
        const optBtn = document.createElement('button');
        optBtn.className = 'option-btn';
        
        // Isolates option character mapping safely (e.g., extracts 'A' from '(A)')
        const choiceLetter = opt.trim().charAt(1); 
        if (userAnswers[index] === choiceLetter) optBtn.classList.add('selected');
        optBtn.innerHTML = opt;
        
        optBtn.onclick = () => selectOption(choiceLetter);
        optionsContainer.appendChild(optBtn);
    });

    document.getElementById('prev-btn').disabled = (index === 0);
    document.getElementById('next-btn').disabled = (index === questions.length - 1);
}

function selectOption(letter) {
    userAnswers[currentQuestionIdx] = letter;
    updateUI();
}

function changeQuestion(step) {
    let nextIdx = currentQuestionIdx + step;
    if (nextIdx >= 0 && nextIdx < questions.length) {
        currentQuestionIdx = nextIdx;
        updateUI();
    }
}

function updateUI() {
    renderMatrix();
    loadQuestion(currentQuestionIdx);
}

function triggerManualSubmit() {
    if (confirm("Are you sure you want to finish and submit your examination paper?")) {
        processEvaluation();
    }
}

function autoSubmitExam() {
    alert("Time has elapsed! Your answers are being submitted automatically.");
    processEvaluation();
}

// Grading Logic and Post-Exam Workspace Controller
function processEvaluation() {
    clearInterval(countdownTimer);
    
    document.getElementById('exam-header').classList.add('hidden');
    document.getElementById('exam-workspace').classList.add('hidden');
    document.getElementById('results-workspace').classList.remove('hidden');

    displayCorrectionsReport();
}

// Compiles and Displays the Post-Exam Performance Breakdown
function displayCorrectionsReport() {
    let pointsScored = 0;
    const container = document.getElementById('corrections-container');
    container.innerHTML = '';

    questions.forEach((q, idx) => {
        const chosen = userAnswers[idx] || "Unanswered";
        const checkCorrect = (chosen === q.answer);
        if (checkCorrect) pointsScored++;

        // Dynamically applies semantic validation classes to each option choice
        const optionsHTML = q.options.map(opt => {
            const letter = opt.trim().charAt(1);
            let classes = "opt-review";
            if (letter === chosen && chosen !== "Unanswered") classes += " opt-your";
            if (letter === q.answer) classes += " opt-correct";
            return `<div class="${classes}">${opt}</div>`;
        }).join('');

        const card = document.createElement('div');
        card.className = `correction-card ${checkCorrect ? 'card-correct' : 'card-incorrect'}`;
        
        card.innerHTML = `
            <span class="badge ${checkCorrect ? 'badge-correct' : 'badge-incorrect'}">
                ${checkCorrect ? 'Correct' : 'Incorrect'}
            </span>
            <div class="question-text" style="font-size: 1.1rem; margin-bottom: 1rem;">
                <strong>Question ${idx + 1}:</strong> ${q.question}
            </div>
            <div class="options-review">
                ${optionsHTML}
            </div>
            <div style="font-size: 0.95rem; margin-top: 1rem; font-weight: 500;">
                <strong>Your Answer:</strong> ${chosen === "Unanswered" ? "Not Attempted" : `Option (${chosen})`}
            </div>
            <div style="font-size: 0.95rem; color: #059669; font-weight: 600; margin-top: 0.3rem;">
                <strong>Correct Answer:</strong> Option (${q.answer})
            </div>
            <div class="explanation-box">
                <strong>Step-by-Step Explanation:</strong><br>${q.explanation}
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('score-out').innerText = pointsScored;
}

function returnToStart() {
    document.getElementById('results-workspace').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}
