

assoc1 = {
    "**": 'R',
    "*": 'R',
    "/": 'R',
    "+": 'R',
    "-": 'R',
    ">>": 'R',
    "<<": 'R',
    ">": 'L',
    "<": 'L',
    "!=": 'L',
    "&&": 'L',
    "||": 'L',
}



def isNumber(s):
    if s not in ['**', '*', '/', '+', '-', '>>', '<<', '>', '<', '!=', '&&', '||']:
        return True
    else:
        return False

def interpret(expression):
    tokens = tokenize(expression)
    #print(tokens)
    num_stack = []
    op_stack = []

    for i in range(len(tokens)):
        token = tokens[i]
        #print(i, token)

            
    for i in range(0, len(tokens)):
        token = tokens[i]
        if isNumber(token):
            if token == "True":
                num_stack.append(True)
            elif token == "False":
                num_stack.append(False)
            else:
                num_stack.append(float(token))
        elif token in {'**', '*', '/', '+', '-', '>>', '<<', '>', '<', '!=', '&&', '||'}:
            while op_stack and (precedence(op_stack[-1]) > precedence(token) or (precedence(op_stack[-1]) == precedence(token) and assoc1[token] == "L")):
                #print(op_stack[-1], precedence(op_stack[-1]))
                apply_operator(num_stack, op_stack)

            op_stack.append(token)
        elif token == '(':
            op_stack.append(token)
        elif token == ')':
            while op_stack and op_stack[-1] != '(':
                apply_operator(num_stack, op_stack)
            op_stack.pop()
        #print(num_stack)
        #print(op_stack)
        #print(" ")
    print(num_stack, op_stack)
    while op_stack:
        apply_operator(num_stack, op_stack)

    return num_stack[0]

def apply_operator(num_stack, op_stack):
    operator = op_stack.pop()
    operand2 = num_stack.pop()
    operand1 = num_stack.pop()

    if operator == '**':
        num_stack.append(pow(operand1, operand2))
    elif operator == '*':
        num_stack.append(operand1 * operand2)
    elif operator == '/':
        num_stack.append(operand1 / operand2)
    elif operator == '+':
        num_stack.append(operand1 + operand2)
    elif operator == '-':
        num_stack.append(operand1 - operand2)
    elif operator == '>>':
        num_stack.append(float(int(operand1) >> int(operand2)))
    elif operator == '<<':
        num_stack.append(float(int(operand1) << int(operand2)))
    elif operator == '>':
        if operand1 > operand2:
            num_stack.append(True)
        else:
            num_stack.append(False)
    elif operator == '<':
        if operand1 < operand2:
            num_stack.append(True)
        else:
            num_stack.append(False)
    elif operator == '!=':
        if operand1 != operand2:
            num_stack.append(True)
        else:
            num_stack.append(False)
    elif operator == '&&':
        if operand1 is True and operand2 is True:
            num_stack.append(True)
        else:
            num_stack.append(False)
    elif operator == '||':
        if operand1 is True or operand2 is True:
            num_stack.append(True)
        else:
            num_stack.append(False)

def precedence(operator):
    if operator in {'||', '&&'}:
        return 1
    elif operator in {'!='}:
        return 2
    elif operator in {'>', '<'}:
        return 3
    elif operator in {'>>', '<<'}:
        return 4
    elif operator in {'*', '/', '+', '-'}:
        return 5
    elif operator in {'**'}:
        return 6
    
    return 0

def tokenize(expression):
    """
    operators = set('+-*/()')
    replacement = ''.join([' ' + char + ' ' if char in operators else char for char in expression])
    print(replacement.split())
    return replacement.split()
    """
    return expression.split()

def main():
    exps = [
        "3 * 2 + 4 << 3 << 1",
        "10 * 2 - 4 / 5 >> 4 << 6 + 2",
        "2 * 4 + 9 < 20 || 45 / 5 + 4 != 5",
        "5 * 3 ** 2 + 5 > 6 ** 3 >> 4 / 2"
    ]
    for exp in exps:
        print(exp + " = " + str(interpret(exp)))


if __name__ == "__main__":
    main()
