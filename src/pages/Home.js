function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">发现文化交流新方式</span>
              <span className="block text-primary">开启一段难忘的互惠旅程！</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              通过互惠生项目，体验异国文化，提升语言能力，收获终身难忘的经历。
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#programs"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                >
                  了解更多
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#application"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  立即申请
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">关于我们</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              我们是一个专注于促进国际文化交流的平台，致力于为中国家庭和国际互惠生搭建桥梁...
            </p>
          </div>
        </div>
      </section>

      {/* 项目详情 */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">项目详情</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">文化交流</h3>
              <p>深入体验当地文化，建立终身难忘的友谊...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">语言提升</h3>
              <p>沉浸式语言环境，快速提升语言能力...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">生活体验</h3>
              <p>体验不同的生活方式，开拓国际视野...</p>
            </div>
          </div>
        </div>
      </section>

      {/* 申请流程 */}
      <section id="application" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">申请流程</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">在线报名</h3>
              <p>填写基本信息</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">资格审核</h3>
              <p>审核申请材料</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">家庭匹配</h3>
              <p>匹配合适家庭</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">行前准备</h3>
              <p>办理签证手续</p>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">常见问题</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">互惠生项目的费用是多少？</h3>
              <p>详细的费用说明...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">需要什么条件才能申请？</h3>
              <p>申请条件说明...</p>
            </div>
          </div>
        </div>
      </section>

      {/* 用户故事 */}
      <section id="stories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">用户故事</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic mb-4">"这是一段难忘的经历..."</p>
              <div className="flex items-center">
                <img src="/avatar1.jpg" alt="用户头像" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">张小明</h4>
                  <p className="text-gray-600">2023年互惠生</p>
                </div>
              </div>
            </div>
            {/* 更多故事... */}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">联系我们</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">联系方式</h3>
              <p>电话：123-456-7890</p>
              <p>邮箱：contact@example.com</p>
              <p>地址：北京市朝阳区...</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">在线咨询</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="您的邮箱"
                  className="w-full px-4 py-2 border rounded"
                />
                <textarea
                  placeholder="留言内容"
                  className="w-full px-4 py-2 border rounded"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded"
                >
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 