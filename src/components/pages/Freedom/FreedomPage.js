import { Col, Row, Image, Divider, Table } from 'antd';
import React from 'react';
import './FreedomPage.css';
const columns = [
    {
        title: '价钱',
        dataIndex: 'price',
        // specify the condition of filtering result
        // here is that finding the price started with `value`
        sorter: (a, b) => a.price.length - b.price.length,
        sortDirections: ['descend'],
    },
    {
        title: '通话',
        dataIndex: 'call',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.call - b.call,
    },
    {
        title: '短信',
        dataIndex: 'text',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.text.indexOf(value) === 0,
    },
    {
        title: '流量',
        dataIndex: 'data',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.data - b.data,
    },
    {
        title: '全国流量',
        dataIndex: 'globalData',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.globalData - b.globalData,
    },
];
const data = [
    {
        key: '1',
        price: 'Big Gig Unlimited 10 GB        每月$ 50        如果您携带自己的手机，则每月$ 45',
        call: '$ 0.05 /分钟',
        text: '无限全球',
        data: '10 GB',
        globalData: '500Mb',
    },
    {
        key: '2',
        price: 'Big Gig Unlimited + Talk 10 GB        每月$ 60        如果您携带自己的手机，则每月$ 50',
        call: '$ 0.05 /分钟',
        text: '无限',
        data: '10 GB',
        globalData: '1 GB',
    },
    {
        key: '3',
        price: 'Big Gig Unlimited + Talk 12 GB        每月70美元        如果您携带自己的手机，每月55美元',
        call: '$ 0.05 /分钟',
        text: '无限全球',
        data: '10 GB',
        globalData: '500Mb',
    },
    {
        key: '4',
        price: 'Big Gig Unlimited Big Gig Unlimited + Talk 15 GB        每月$ 75        如果您自带电话，则每月$ 6010 GB        每月$ 50        如果您携带自己的手机，则每月$ 45',
        call: '$ 0.05 /分钟',
        text: '无限全球',
        data: '10 GB',
        globalData: '500Mb',
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const Content = () => (
    <div className="site-layout-content">
        <Row align="middle">
            <Col span={18}>
                <Image
                    width={500}
                    src={process.env.PUBLIC_URL + '/images/Freedom.jpg'}
                    alt='Freedom Mobile'
                />
            </Col>
            <Col span={6}>
                <div>
                    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/gpyn9BeU7sA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    热门文章
                </div>
                <div>
                    说吧
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <p>加拿大全国-Freedom Mobile-最新套餐-中文信息-每周更新-最便宜-最优惠</p>
                <ul>
                    <li>Freedom Mobile 不提供中文客服电话服务，官方仅提供英文电话客服：+1 877-946-3184 ，也可在手机上直接输入*611拨打联系SIM卡运营商</li>

                    <ul>
                        <li>Freedom Mobile速度测试</li>
                        <ul>
                            <li>优点</li>
                            <li>优点</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>那么，自由移动接收有什么好处吗？</li>
                        <ul>
                            <li>优点</li>
                            <li>优点</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>那么Freedom Mobile值得吗？</li>
                    </ul>
                    <ul>
                        <li>建议</li>
                    </ul>
                    <ul>
                        <li>关于Freedom Mobile的常见问题</li>
                        <ul>
                            <li>VoLTE何时会出现在Freedom Mobile上？</li>
                            <li>Freedom Mobile是否提供预付费服务？</li>
                            <li>什么Freedom Mobile这么便宜？</li>
                            <li>Freedom Mobile是否出售iPhone？</li>
                            <li>iPhone 8和iPhone X是否可以在Freedom Mobile上使用？</li>
                            <li>Freedom Mobile是否具有LTE？</li>
                            <li>什么是Freedom移动客户服务号码？</li>

                        </ul>
                    </ul>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <h1>Freedom Mobile 不提供中文客服电话服务，官方仅提供英文电话客服：+1 877-946-3184 ，也可在手机上直接输入*611拨打联系SIM卡运营商</h1>
                <p>Freedom Mobile 官网在线客服页面：</p>
                <a href='https://www.freedommobile.ca/en-CA/contact-us'>https://www.freedommobile.ca/en-CA/contact-us</a>
            </Col>
        </Row>
        <br />
        <Row>
            <h4>品牌背景</h4>
            <Divider />
            <p>加拿大电话通信公司Freedom Mobile是Shaw Communications在购买Wind Mobile之后发布的新运营商。因此，可以从本质上说是Wind Mobile，Shaw正大力投资于这一新的无线运营商，以真正为用户带来价值。Freedom Mobile拥有超过100万的订户，是加拿大第四大运营商。时间会告诉我们它是否有能力与三巨头竞争。</p>
            <p>Shaw于2016年3月1日正式接管Wind Mobile，并于2016年11月将其重命名为FreedomMobile。Freedom的4G LTE服务的推出也成为热门话题，该服务也在2016年11月推出。自发布几年以来，发生了很多变化。他们现在像其他运营商一样提供“无限”计划，但是接收和覆盖仍然是一个热门话题。Freedom还在他们的网站上增加了一个5G部分，有传言说他们将竞争获得可用的频谱以启动5G服务。</p>
        </Row>
        <br />
        <Row>
            <h4>通讯网络</h4>
            <Divider />
            <p>根据Freedom Mobile网站的数据，2019年将有超过130万加拿大人访问快速LTE数据。此外，他们还开始推出扩展LTE，即他们的Band 13 LTE（700MHZ低频段频谱） 。扩展LTE的意思是，由于该频谱具有更好的穿透墙的能力，因此您可以在当前覆盖范围的区域获得更强的覆盖范围。</p>
            <p>Freedom Mobile的LTE覆盖范围肯定已经走了很长一段路。现在，LTE覆盖是他们在网络上提供服务的任何地方的标准配置。</p>
        </Row>
        <Row>
            <h2>Freedom Mobile速度测试</h2>
            <p>尽管论坛上有各种速度测试显示下载速度为100 Mbps，但在多伦多市周围进行测试时，我们始终无法达到如此高的速度，但我们确实接近了！我们发现一系列的上传和下载速度，平均速度和覆盖范围是相当合理的。我们实现的最高下载速度为62.8 Mbps，这是非常不错的-如果Freedom Mobile在所有区域都保持一致的速度，那么我们认为您的物有所值。在达到网络一致性之前还需要一段时间，但是Freedom Mobile和母公司Shaw一直致力于开发网络和扩大覆盖范围。这是我们的6个速度测试的屏幕截图：</p>
            <Image
                width={300}
                align='centre'
                src={process.env.PUBLIC_URL + '/images/FreedomMobileSpeedTest.jpg'}
                alt='Freedom Mobile'
            />
        </Row>
        <br />
        <Row>
            <Col span={24}>
                <h4>产品服务</h4>
                <Divider />
                <p>Freedom Mobile最近推出了数字折扣。在您查看他们的计划之前，数字折扣每月会比合格的有价工厂的正常价格低5加币。</p>

                <ul>
                    <li>激活后付款或先付款服务</li>
                    <li>设置预授权付款</li>
                    <li>使用数字折扣代码</li>
                    <li>完成！</li>
                </ul>
                <b>Freedom Mobile提供以下“大数据无限数据”计划。有许多计划，包括通话，短信和流量的变化。就价格而言，对于这种数据和通话组合来说，这也是所有运营商中最便宜的！</b>
            </Col>
        </Row>
        <Table columns={columns} dataSource={data} />
        <p>Freedom Mobile还提供以下“ Freedom”计划。</p>
    </div>
);
export default Content;