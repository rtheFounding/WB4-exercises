const truthy_values = [
    false,
    0,
    ``,
    '',
    "",
    null,
    undefined,
    NaN,
    '0',
    'false',
    [],
    {},
    function() {}
  ].filter(Boolean);

  // Filters out falsy values and log remaining truthy values
  console.log(truthy_values)