from tabulate import tabulate
import re

class Rule1: 
    def __init__(self, operator , assoc , prec):
        self.operator = operator
        self.assoc = assoc
        self.prec = prec

def tokenize(expression, rules):
    # Create a regular expression pattern to match all operators
    operator_pattern = '|'.join(re.escape(rule.operator) for rule in rules)
    
    # Split the expression into tokens using the operator_pattern
    tokens = re.split(f'({operator_pattern})', expression)

    # Filter out empty strings
    tokens = [token for token in tokens if token]

    operator_stack = []
    operand_stack = []

    print("Tokens:", tokens)

    for token in tokens:
        if token.isdigit():
            operand_stack.append(int(token))
        else:
            # Find the matching rule for the operator
            for rule in rules:
                if token == rule.operator:
                    operator_stack.append(rule)
                    break

    return operator_stack, operand_stack


def controller(operator_stack, operand_stack):
    # print(operator_stack)
    print(operand_stack)

    operator_stack.sort(key=lambda x: (int(x.prec), x.assoc))

    for operator in operator_stack:
        print(operator.operator + " found")
        if operator.assoc == "L":
            op2 = operand_stack.pop(0)
            op1 = operand_stack.pop(0)
        elif operator.assoc == "R":
            op1 = operand_stack.pop()
            op2 = operand_stack.pop()

        result = perform_operation(operator.operator, int(op1), int(op2))
        print(result)

        if isinstance(result, str) and result == "Division by zero":
            return result  
            
        operand_stack.insert(0, result)

    return operand_stack[0]

    
        
def perform_operation(operator, operand1, operand2):
    if operator == '**':
        return operand1 ** operand2
    elif operator == '*':
        return operand1 * operand2
    elif operator == '/':
        return operand1 / operand2
    elif operator == '+':
        return operand1 + operand2
    elif operator == '-':
        return operand1 - operand2
    elif operator == '>>':
        return operand1 >> operand2
    elif operator == '<<':
        return operand1 << operand2
    elif operator == '>':
        return int(operand1 > operand2)
    elif operator == '<':
        return int(operand1 < operand2)
    elif operator == '!=':
        return int(operand1 != operand2)
    elif operator == '&&':
        return int(operand1 and operand2)
    elif operator == '||':
        return int(operand1 or operand2)

    
def main():
    #Declare rules
    rules = [
        Rule1('**' , 'R' , '2'),
        Rule1('*'  , 'L' , '3'),
        Rule1('/'  , 'L' , '3'),
        Rule1('+'  , 'L' , '4'),
        Rule1('-'  , 'L' , '4'),
        Rule1('>>' , 'L' , '5'),
        Rule1('<<' , 'L' , '5'),
        Rule1('>'  , 'L' , '6'),
        Rule1('<'  , 'L' , '6'),
        Rule1('!=' , 'L' , '7'),
        Rule1('&&' , 'L' , '8'),
        Rule1('||' , 'L' , '8'),
    ] 
    #Print rules
    headers = ["Operator", "Associativity", "Precedence"]
    rows = [[r.operator, r.assoc, r.prec] for r in rules]
    print(tabulate(rows, headers=headers, tablefmt="grid"))
    
    # operators, operands = tokenize("5**2>>6/3", rules)
    operators, operands = tokenize("2**2**3/4+3*2", rules)
    # print("Operators:", operators)
    print("Operands:", operands)

    
    print(controller(operators, operands))

    print(operands)

if __name__ == "__main__":
    main()