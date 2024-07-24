export default {
  'setting.title': '平台设置',
  'setting.desc': '配置平台参数',
  'setting.basic': '基础设置',
  'setting.message.push': '消息推送',
  'setting.message.hook.addr': 'webhook地址',
  'setting.message.hook.key': 'webhook秘钥',
  'setting.message.smtp': '邮件SMTP服务地址',
  'setting.message.smtp.enabled': '启用ssl端口',
  'setting.message.smtp.port': 'SMTP服务端口',
  'setting.message.smtp.user': '邮件推送人用户名',
  'setting.message.smtp.password': '邮件推送人密码',
  'setting.message.smtp.test': '邮件测试收件地址',
  'setting.message.hook.switch': 'webhook推送开关',
  'setting.message.mail.switch': 'email推送开关',
  'setting.message.action.mail': '邮件测试',
  'setting.message.action.hook': 'hook测试',

  'setting.adv': '进阶设置',
  'setting.adv.env': '自定义环境',
  'setting.adv.domain': '推送域名',
  'setting.adv.env.tips': '环境名称',
  'setting.adv.env.add': '添加环境',
  'setting.adv.query.open': '开启查询审核',
  'setting.adv.query.limit': '查询最大Limit限制',
  'setting.adv.query.expire': '查询时限',
  'setting.adv.query.mins': '分',
  'setting.adv.query.export': '查询导出',
  'setting.adv.query.register': '开启用户注册',
  'setting.adv.query.closeai': 'openAI AK',
  'setting.adv.query.closeai.proxy': 'HTTP代理地址',

  'setting.ldap': 'LDAP设置',
  'setting.ldap.enabled': 'Ldap地址',
  'setting.ldap.ssl': '启用ldaps',
  'setting.ldap.url': 'Ldap 地址',
  'setting.ldap.url.tips': '[ip地址或者域名]:[端口号]',
  'setting.ldap.dn': 'LDAP管理员DN',
  'setting.ldap.dn.tips': '请填写管理员DN',
  'setting.ldap.password': 'LDAP管理员密码',
  'setting.ldap.password.tips': '请填写管理员密码',
  'setting.ldap.filter': 'LDAP_Search filter',
  'setting.ldap.filter.tips':
    '例如:(&(objectClass=organizationalPerson)(sAMAccountName=%s))，%s为占位符必须存在',
  'setting.ldap.sc': 'LDAP_SCBASE',
  'setting.ldap.test.user': 'LDAP 测试用户',
  'setting.ldap.test.password': 'LDAP 测试密码',
  'setting.ldap.map': 'LDAP 用户属性映射',
  'setting.ldap.map.tips':
    '当前支持real_name(真实姓名),email(邮箱),department(部门) 3种字段的映射。映射格式如下(key为需要映射的用户字段,value为LDAP的key): \n{\'{\'} "real_name":"name","email":"mail","department":"dept" {\'}\'} ',
  'setting.ldap.test': 'ldap测试',
  'setting.ldap.alert':
    '1.LDAP登录用户名，必须全局唯一。<br><br>2.由于各个邮件服务提供商对于垃圾邮件过滤的机制各不相同，可能会造成邮件无法接收的情况。所以使用前请测试是否稳定。对于使用了ssl安全协议的stmp连接需勾选启动ssl端口复选框<br><br>3.只有开启相应的消息推送开关后，消息推送才会开启。',

  'setting.data.clear': '数据清除',
  'setting.data.clear.tips': '你确定要删除工单吗?',
  'setting.data.clear.order': '指定时间内工单',
  'setting.data.clear.query': '指定时间内查询工单',
  'setting.data.clear.alert':
    '1.设置最大Limit数后，所有的查询语句的查询结果都不会超过这个数值。<br><br>2.查询审核开关开启后，所有的查询都必须通过管理员同意才能进行。关闭则可自主查询<br><br>3.启用GPT进行SQL语句分析请脱敏使用,防止敏感数据上传',
  'setting.ai.base_url': '接口地址',
  'setting.ai.proxy_url.tips': 'HTTP 代理地址',
  'setting.ai.proxy_url': '代理地址',
  'setting.ai.base_url.tips': '请填写接口地址，默认为:https://api.openai.com',
  'setting.ai.api_key': 'API_KEY',
  'setting.ai.api_key.tips': '请填写API_KEY',
  'setting.ai.model': '模型',
  'setting.ai.model.tips': '请填写模型',
  'setting.ai.temperature': '随机性(temperature)',
  'setting.ai.top': '核采样(top_p)',
  'setting.ai.max_tokens': '单次回复限制(max_tokens)',
  'setting.ai.presence_penalty': '话题新鲜度(presence_penalty)',
  'setting.ai.frequency_penalty': '频率惩罚度(frequency_penalty)',
  'setting.ai.advisor_prompt': 'SQL语句优化提示词',
  'setting.ai.sql_gen_prompt': 'SQL语句生成提示词',
  'setting.ai.sql_agent_prompt': 'Mysql助手提示词',
};
