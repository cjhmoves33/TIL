import argparse
parser = argparse.ArgumentParser()
parser.add_argument(
    "-v", "--verbosity", help="increase output verbosity",
    type=int, default=0 , choices=[0,1,2]
    )
parser.add_argument("square", help="제곱값을 나타냄", type=int)

args = parser.parse_args()
answer = args.square**2

if args.verbosity >= 2:
    print(f"{args.square}의 제곱은 {answer} ")
elif args.verbosity ==1:
    print(f"{args.square}^2 == {answer}")
else:
    print(answer)