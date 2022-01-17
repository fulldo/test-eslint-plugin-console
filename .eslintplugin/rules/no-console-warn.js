module.exports = {
  meta: {
    docs: {
      description: "remove-warn",
      category: "Fill me in",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },

  create: function (context) {
    return {
      CallExpression(node) {
        if (node.callee && node.callee.type === "MemberExpression") {
          if (
            node.callee.object &&
            node.callee.object.name === "console" &&
            node.callee.property &&
            node.callee.property.name === "warn"
          ) {
            console.log("检测出 console.warn");
            context.report({
              node,
              message: "本地规则：不允许使用 console.warn",
              fix: function (fixer) {
                const [start, end] = node.range;
                return [fixer.replaceTextRange([start, end], "")];
              },
            });
          }
        }
      },
    };
  },
};
