let tools = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "jammer" },
  { id: 3, name: "Chamar" },
];

module.exports.getAllTools = (req, res, next) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.status(200).send(tools.slice(0, limit));
};

module.exports.saveATools = (req, res) => {
    console.log(req.body);
    tools.push(req.body)
  res.send(tools);
};

module.exports.getToolsDetail = (req, res) => {
  const { id, test } = req.params;
  const filter = { _id: id };
  const foundTool = tools.find((tool) => tool.id == id);
  res.send(foundTool);
};
module.exports.updateTool=(req, res)=>{
    const {id}  = req.params;
    const filter = { _id: id };
    const newData = tools.find(tool=> tool.id == Number(id));
    newData.id =  id;
    newData.name = req.body.name;
    res.send(newData)

}
module.exports.deleteTools=(req, res)=>{
    const {id}  = req.params;
    const filter = { _id: id };
    tools = tools.filter(tool => tool.id !== Number(id))
    res.send(tools)

}