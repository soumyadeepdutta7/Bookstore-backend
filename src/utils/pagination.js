exports.paginate = async (query, page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const [results, total] = await Promise.all([
      query.skip(offset).limit(limit),
      query.countDocuments(),
    ]);
  
    return {
      results,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  };
  