module Main (main) where

-- import Lib


factorial :: Integer -> Integer
factorial 0 = 1
factorial n =  n * factorial (n - 1)

--Test cases
main :: IO ()
main = do
    putStrLn $ "Factorial of 0 is: " ++ show (factorial 0)
    putStrLn $ "Factorial of 5 is: " ++ show (factorial 5)
    putStrLn $ "Factorial of 10 is: " ++ show (factorial 10)
